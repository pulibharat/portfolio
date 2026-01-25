# Copy certificate images from Desktop into the portfolio so the Certifications section can show them.
# Run from PowerShell: .\copy-certificates.ps1
# Or: Right-click this file → Run with PowerShell

$source = "$env:USERPROFILE\Desktop\images\certificates"
$dest   = "$PSScriptRoot\public\certificates"

if (-not (Test-Path $source)) {
    Write-Host "Source folder not found: $source" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }

Get-ChildItem $source -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|pdf)$' } | ForEach-Object {
    Copy-Item $_.FullName (Join-Path $dest $_.Name) -Force
    Write-Host "Copied: $($_.Name)"
}
Write-Host "`nDone. Certificate images are in public\certificates\" -ForegroundColor Green
