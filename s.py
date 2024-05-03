import subprocess

def restore_deleted_files():
    # اجرای دستور git fsck برای یافتن اشیاء از دست رفته
    process = subprocess.Popen(['git', 'fsck', '--lost-found'], stdout=subprocess.PIPE)
    output, error = process.communicate()
    
    # اگر اطلاعاتی پیدا شود
    if output:
        # از جداسازی خطوط مربوط به فایل‌های از دست رفته استفاده می‌کنیم
        lost_files = [line.split()[2] for line in output.decode().splitlines() if 'dangling blob' in line]
        
        # بازگردانی هر یک از فایل‌های پیدا شده
        for file_path in lost_files:
            # استفاده از دستور git show برای بازیابی محتوای فایل
            restore_process = subprocess.Popen(['git', 'show', file_path], stdout=subprocess.PIPE)
            restored_content, error = restore_process.communicate()
            
            # نوشتن محتوای بازیابی شده به یک فایل جدید
            with open(file_path, 'wb') as f:
                f.write(restored_content)
            print(f"File '{file_path}' restored successfully.")
    else:
        print("No lost files found.")

if __name__ == "__main__":
    restore_deleted_files()
