# 服薬守る君

 **服薬守る君**は、認知症高齢者の薬の飲み忘れを防ぐ手助けをするシステムです。
 スマートフォンのアプリで薬を飲む時間の設定、薬を飲んだかの確認、薬の在庫状況などを把握することができます。薬を飲む判定を行います。


## ディレクトリ構成

 - [Esp32](https://github.com/ao320/hukuyakumamoru/tree/main/Esp32) : ESP32を用いて加速度センサーの値をBLEで送信するシステムのフォルダです。
 - [Expo-app](https://github.com/ao320/hukuyakumamoru/tree/main/Expo-app) : React Native, Expoを使ったネイティブアプリケーションのフォルダです。
 - [Node-server](https://github.com/ao320/hukuyakumamoru/tree/main/Node-server) : Node.js, mongoDB, expressを使ったバックエンドAPIのフォルダです。
 - [RaspberryPiPrograms](https://github.com/ao320/hukuyakumamoru/tree/main/RaspberryPiPrograms) : RaspberryPiを用いてデータベースとのやり取りや、顔と手の画像認識やESP32からの傾き検知の情報による薬を飲んでいるかの判定、Arduinoやお薬ターミナル（薬提供デバイス）との連携などを行っているシステムのフォルダです。
