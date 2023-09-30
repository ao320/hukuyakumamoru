fetch('https://exp.host/--/api/v2/push/send', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: "ExponentPushToken[DAKWF0POfgYLL13JHcYPfe]",
    title: 'タイトル',
    body: '内容',
  }),
})