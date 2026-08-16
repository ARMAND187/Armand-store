import urllib.request
import re

url = 'https://qi.iq'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    matches = re.findall(r'src=["\']([^"\']*(?:logo|qi)[^"\']*\.(?:svg|png|jpg))["\']', html, re.I)
    print('Found logos:', matches)
except Exception as e:
    print('Error:', e)
