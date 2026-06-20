import os
import shutil
import sys
import ctypes
import time

current_dir = os.path.dirname(os.path.abspath(__file__))
key_file_path = os.path.join(current_dir, "key-DO-NOT-REMOVE.txt")
if not os.path.exists(key_file_path):
    print("Fehler: 'key-DO-NOT-REMOVE.txt' wurde nicht im aktuellen Verzeichnis gefunden. Installation abgebrochen.")
    exit()

print("    _              _     _ _   _ ___ ")
time.sleep(0.1)
print("   / \   _ __ ___ | |__ (_) | | |_ _|")
time.sleep(0.1)
print("  / _ \ | '_ ` _ \| '_ \| | | | || | ")
time.sleep(0.1)
print(" / ___ \| | | | | | |_) | | |_| || | ")
time.sleep(0.1)
print("/_/   \_\_| |_| |_|_.__/|_|\___/|___|")

time.sleep(2)

print("AmbiUI Install Assistant")
time.sleep(0.5)
print("Made for Windows only")
time.sleep(0.5)
print("This installer will copy the current folder to Program Files and create a link to index.html")
print("")

if not ctypes.windll.shell32.IsUserAnAdmin():
    print("\033[1;31mAdministration-Mode is required\033[0m")
    exit()

print("\033[1;31mADMIN MODE\033[0m")

print("")
print("WARNING: This installer will copy the current folder to Program Files. Make sure you have this python script in the folder you want to install.")
user_os = input("Enter your operating system (Windows): ").strip().lower()

if user_os == "windows":
    folder_name = os.path.basename(current_dir)
    input(f"Press Enter to install on Program Files (C:\\Program Files)\\\033[1;31m[{folder_name}]\033[0m")
    print("Installing on Windows...")
    
    try:
        
        target_dir = os.path.join(r"C:\Program Files", folder_name)
        
        if current_dir.lower().startswith(target_dir.lower()):
            print("Fehler: Das Skript wird bereits aus dem Zielordner ausgeführt. Installation abgebrochen.")
            exit()
            
        if os.path.exists(target_dir):
            input("Warning: Target folder already exists. Files may be overwritten. Press Enter to continue...")
        else:
            os.makedirs(target_dir)
            
        for item in os.listdir(current_dir):
            if item.lower() == ".git" or item == os.path.basename(__file__):
                continue
                
            source_path = os.path.join(current_dir, item)
            target_path = os.path.join(target_dir, item)
            
            if os.path.isdir(source_path):
                shutil.copytree(source_path, target_path, dirs_exist_ok=True)
            else:
                shutil.copy2(source_path, target_path)
                    
        index_path = os.path.join(target_dir, "index.html")
        print(f"Installation abgeschlossen. Link zur index.html: file:///{index_path.replace('\\', '/')}")
        
    except PermissionError:
        print("Fehler: Für das Schreiben in 'Program Files' werden Administratorrechte benötigt. Bitte starte das Skript als Administrator.")

else:
    print("Unsupported operating system. Please run this installer on Windows.")