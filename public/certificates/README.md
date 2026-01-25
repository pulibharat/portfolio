# Certificate images

The Certifications section loads images from this folder.  
The app is set up to use the **exact filenames** from your `Desktop\images\certificates` folder.

## One-time setup: copy your certificates here

**Option A – Run the script (easiest)**  
In the project root, run:

```powershell
.\copy-certificates.ps1
```

That copies everything from `C:\Users\pulib\Desktop\images\certificates` into `public\certificates`.

**Option B – Manual copy**  
Copy all certificate image files from  
`C:\Users\pulib\Desktop\images\certificates`  
into  
`c:\Users\pulib\portfolio\public\certificates`  
Keep the same file names (including spaces).

## Filenames the app expects (from your Desktop folder)

| File in this folder | Certification |
|---------------------|---------------|
| `new ibm data foundation.jpg` | Big Data Foundation (preferred) |
| `new ibm data fundamentals.jpg` | IBM Data Fundamentals (preferred) |
| `new ibm ai foundation.jpg` | IBM AI Foundation (preferred) |
| `new cisco.jpg` | Introduction to Data Science (preferred) |
| `deloitte-data-analytics.jpg` | Data Analytics (Deloitte) |
| `unity-essentials.jpg` | Unity Essentials |
| `hackerrank-css.png` | CSS (HackerRank) |
| `simplilearn-html.png` | HTML (Simplilearn) |
| `new power bi.jpg` | Power BI (Infosys) (preferred) |
| `new basics of python.jpg` | Basics of Python (preferred) |
| `udemy-mysql.jpg` | MYSQL |
| `iot-workshop.jpg` | IOT Workshop |
| `coursera-data-analysis-python.png` | Data Analysis with Python / Meta |
| `new power bi.jpg` | Power BI (Infosys) (preferred) |
| `new basics of python.jpg` | Basics of Python (preferred) |

Supported: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.pdf`.
