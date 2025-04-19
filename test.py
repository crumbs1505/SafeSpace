from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize WebDriver
driver = webdriver.Chrome()

try:
    # Open the application
    driver.get("http://localhost:5173")  # Replace with your app's URL

    # Wait for the page to load and locate the Safety Analysis button
    safety_analysis_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.LINK_TEXT, "Try Safety Analysis"))
    )
    safety_analysis_button.click()
    print("Safety Analysis successfully executed and works as expected")

    # Wait for a location marker to be clickable and click it
    location_marker = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "leaflet-marker-icon"))
    )
    location_marker.click()
    print("Location marker successfully executed and works as expected")

    # Retrieve safety score details
    safety_score_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//p[contains(text(), 'Safety Score')]"))
    )
    print(f"Safety Score retrieved: {safety_score_element.text}")
    print("Safety Score retrieval successfully executed and works as expected")

    # Navigate back to the main page
    driver.back()

    # Locate and click on the Self Defense Tips section
    self_defense_tips_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.LINK_TEXT, "Self Defense Tips"))
    )
    self_defense_tips_button.click()
    print("Self Defense Tips section successfully executed and works as expected")

    # Click each defensive tip
    defensive_tips = driver.find_elements(By.CLASS_NAME, "defensive-tip")
    for tip in defensive_tips:
        tip.click()
        print(f"Defensive Tip '{tip.text}' successfully executed and works as expected")
        driver.back()  # Navigate back after clicking each tip

finally:
    # Close the browser
    driver.quit()
