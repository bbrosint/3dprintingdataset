import sys
import getopt
import os
import base64
import json
import logging
from tqdm import tqdm
import requests

VERSION = '0.0.1'

def print_logo(version):
    logo_raw = '''4pSz4pSTICAgICAgICAg4pSz4pSTICAgICAgIOKUkyAgICAg4pSTICAgIArilIPilIPilI/ilJPilYvilI/ilJPilI
         /ilI/ilJPilYvilIPilIPilI/ilJPilJPilI/ilI/ilI/ilJPilIPilI/ilJPilI/ilJPilI/ilKvilI/ilJPilI/
         ilJMK4pS74pSb4pSX4pS74pSX4pSX4pS74pSb4pSXIOKUl+KUu+KUm+KUl+KUm+KUl+KUu+KUm+KUm+KUl+KUl+
         KUl+KUm+KUl+KUu+KUl+KUu+KUlyDilJsgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA='''
    b64_bytes = logo_raw.encode('utf-8')
    b64_bytes = base64.b64decode(b64_bytes)
    logo = b64_bytes.decode('utf-8')
    logo_len = len(logo.split('\n')[-1])
    v_len = len(version)
    print(logo + '\n' +' '*(logo_len-v_len)+version)


def load_config():
    config_data_path = './download_config.json'
    config_data = {}
    if not os.path.exists(config_data_path):
        logging.error(f'No "{config_data_path}" found!')
        exit()
    with open(config_data_path,'r') as js_stream:
        config_data = json.load(js_stream)
    return config_data

def download_data(urls):
    destination_path = './dataset/' + urls[0][0]
    if not os.path.exists(destination_path):
        os.mkdir(destination_path)
    for url in urls:
        response = requests.get(url[1], stream=True)
        with open(destination_path+'/'+url[2], "wb") as handle:
            for data in tqdm(response.iter_content(chunk_size=1024),
                             unit='kB',
                             leave=False,
                             desc=f'File {url[2]}'):
                handle.write(data)

def get_file_urls(base_url,
                  model_no,
                  file_types = ['.gcode', '.stl'],
                  sizes = ['s', 'm', 'l']):
    urls = []
    base_mdl_path = base_url + model_no + '/'
    filename = 'info.json'
    urls.append([model_no, base_mdl_path + filename, filename])
    for size in sizes:
        for file_type in file_types:
            filename = model_no + '_' + size + file_type
            urls.append([model_no, base_mdl_path + filename,filename])
    return urls

def download_dataset(base_url,
                     model_keys,
                     file_types = ['.gcode', '.stl'],
                     sizes = ['s', 'm', 'l']):
    for mdl in tqdm(model_keys, desc='Total dataset'):
        _urls = get_file_urls(base_url, mdl, file_types, sizes)
        download_data(_urls)


def main(argv):
    print_logo(VERSION)
    options = 'hs:f:'
    all_sizes = ['s','m','l']
    all_filetypes = ['gcode','stl']
    download_sizes = []
    download_filetypes = []
    opts, args = getopt.getopt(argv,options,['sizes=','filetypes='])
    for opt, arg in opts:
        if opt == '-h':
            print ('download_dataset.py -s --sizes s,m,l -f --filetypes gcode,stl')
            sys.exit()    
        if opt in ('-s','--sizes'):
            download_sizes = [i.lower() for i in arg.split(',') if i.lower() in all_sizes] 
            if len(download_sizes)>0 and len(download_sizes)<3:
                print(f'Restricting download to size{"s"*(-1+len(download_sizes))}: {", ".join(download_sizes)}')
        if opt in ('-f','--filetypes'):
            download_filetypes = [i.lower() for i in arg.split(',') if i.lower() in all_filetypes] 
            if len(download_filetypes)==1:
                print(f'Restricting download to filetype: {"".join(download_filetypes)}')
    if len(download_filetypes) == 0:
        download_filetypes = all_filetypes
    download_filetypes = ['.'+i for i in download_filetypes]
    if len(download_sizes) == 0:
        download_sizes = all_sizes
    config = load_config()
    base_url = ''
    model_items = []
    base_url_key = 'baseurl'
    model_key = 'models'
    try:
        base_url  = config[base_url_key]
    except KeyError:
        logging.error(f'Key "{base_url_key}" not found in config!')
        sys.exit()    
    try:
        model_items  = config[model_key]
    except KeyError:
        logging.error(f'Key "{model_key}" not found in config!')
        sys.exit()
    destination_path = './dataset'
    if not os.path.exists(destination_path):
        os.mkdir(destination_path)
    download_dataset(base_url,
                     model_items,
                     file_types=download_filetypes, 
                     sizes=download_sizes)


if __name__ =='__main__':
    main(sys.argv[1:])