from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Configuration
WINDOW_SIZE = 10
window = []

THIRD_PARTY_API_URL = "https://api.prime-numbers.io/get?number="
THIRD_PARTY_API_URL = "https://fibonacci.now.sh/api/v1/numbers"
THIRD_PARTY_API_URL = "http://numbersapi.com/random?min=2&max=10000&even=true"
THIRD_PARTY_API_URL = "https://www.random.org/integers/"


def fetch_numbers(numberid):
    """Fetch numbers from third-party API based on numberid"""
    try:
        if numberid == 'p':
            response = requests.get(f"{THIRD_PARTY_API_URL}/primes?count=10", timeout=0.5)
        elif numberid == 'f':
            response = requests.get(f"{THIRD_PARTY_API_URL}/fibonacci?count=10", timeout=0.5)
        elif numberid == 'e':
            response = requests.get(f"{THIRD_PARTY_API_URL}/even?count=10", timeout=0.5)
        elif numberid == 'random':
            response = requests.get(f"{THIRD_PARTY_API_URL}/random?count=10", timeout=0.5)

        if response.status_code == 200:
            return response.json().get('numbers', [])
        else:
            return []
    except requests.RequestException:
        return []


@app.route('/numbers/<numberid>', methods=['GET'])
def get_numbers(numberid):
    if numberid not in ['p', 'f', 'e', 'random']:
        return jsonify({"error": "Invalid numberid"}), 400

    global window
    prev_state = window.copy()
    numbers = fetch_numbers(numberid)
    for num in numbers:
        if num not in window:
            if len(window) >= WINDOW_SIZE:
                window.pop(0) 
            window.append(num)

    if len(window) > 0:
        avg = sum(window) / len(window)
    else:
        avg = 0.0

    return jsonify({
        "windowPrevState": prev_state,
        "windowCurrState": window,
        "numbers": numbers,
        "avg": round(avg, 2)
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9876)
