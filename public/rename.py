import os

def rename_files(folder_path):
    # Get the list of files in the folder
    files = os.listdir(folder_path)

    # Rename each file with a numeric index
    for i, file_name in enumerate(files):
        # Generate the new file name
        new_name = str(i) + ".jpg"

        # Construct the full paths for the old and new names
        old_path = os.path.join(folder_path, file_name)
        new_path = os.path.join(folder_path, new_name)

        # Rename the file
        os.rename(old_path, new_path)
        print(f'Renamed: {file_name} -> {new_name}')

# Set the folder path to the specified location
folder_path = r'C:\Users\Svene\.dev\tot\public\images'

# Call the function to rename files in the specified folder
rename_files(folder_path)
