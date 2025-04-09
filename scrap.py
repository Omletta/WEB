from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from pymongo import MongoClient
import time

# MongoDB setup
MONGO_URI = 'mongodb+srv://islam:AHJEIZ@crousdb.cqtwkns.mongodb.net/?retryWrites=true&w=majority&appName=Crousdb'
client = MongoClient(MONGO_URI)
db = client['test']
collection = db['scrapped_menu']

# Headless Chrome setup
chrome_path = r'C:\Users\islam\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe'  # Update this!
options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
service = Service(executable_path=chrome_path)
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://www.crous-lyon.fr/restaurant/restaurant-iut-gratte-ciel/")
time.sleep(5)  # Let the page fully render the JS

# Extract slide data
slides = driver.find_elements(By.CLASS_NAME, "slick-slide")
menu_data = []

for slide in slides:
    if not slide.is_displayed():
        driver.execute_script("arguments[0].style.display = 'block';", slide)
    
    try:
        date_elem = slide.find_element(By.CLASS_NAME, "menu_date")
        date = date_elem.text.replace("Menu du ", "").strip()

        categories = slide.find_elements(By.CLASS_NAME, "meal_title")
        for cat in categories:
            category = cat.text.strip()
            ul = cat.find_element(By.XPATH, "following-sibling::ul[1]")
            items = [li.text.strip() for li in ul.find_elements(By.TAG_NAME, "li")]

            menu_data.append({
                "date": date,
                "category": category,
                "items": items
            })
    except Exception as e:
        print("⚠️ Skipping a slide due to error:", e)
        continue

# Save to MongoDB
if menu_data:
    collection.delete_many({})
    collection.insert_many(menu_data)
    print("✅ Scraped & saved menu.")
else:
    print("❌ No menu data found.")

driver.quit()
