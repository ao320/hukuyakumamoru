import urllib.request, json

if __name__ == "__main__":
    url = "https://exp.host/--/api/v2/push/send"
    method = "POST"
    headers = {
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
    }
    body = {
        "to": "ExponentPushToken[DAKWF0POfgYLL13JHcYPfe]",
        "title": "タイトル",
        "body": "内容",
    }
    json_data = json.dumps(body).encode("utf-8")
    request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
    with urllib.request.urlopen(request) as response:
        response_body = response.read().decode("utf-8")