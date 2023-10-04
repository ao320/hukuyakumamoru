#!/bin/sh

sudo chmod 777 /dev/gpiomem

python3 /home/mamorukun/hukuyakumamoru-main/RaspberryPiPrograms/reset-istakemedicines.py &
python3 /home/mamorukun/hukuyakumamoru-main/RaspberryPiPrograms/PutMedicine.py &
python3 /home/mamorukun/hukuyakumamoru-main/RaspberryPiPrograms/TakeOutMedicine.py
