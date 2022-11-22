import multiprocessing
import os

bind = os.getenv('WEB_BIND','0.0.0.0:3000')
workers = multiprocessing.cpu_count() *2
threads = 3
keyfile = os.getenv('PRIVKEY','/etc/letsencrypt/live/unikarlender.de/privkey.pem')
certfile = os.getenv('CERT','/etc/letsencrypt/live/unikarlender.de/cert.pem')
ca_certs = os.getenv('CHAIN','/etc/letsencrypt/live/unikarlender.de/chain.pem')