$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$source = Join-Path $root 'Resume.html'
$output = Join-Path $root 'Resume.pdf'

$edge = @(
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
    "$env:LOCALAPPDATA\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1

if (-not $edge) {
    throw 'Microsoft Edge was not found. Install Edge or update scripts/render-resume.ps1 with your browser path.'
}

$uri = ([System.Uri]$source).AbsoluteUri
& $edge --headless --disable-gpu --no-pdf-header-footer "--print-to-pdf=$output" $uri

if ($null -ne $LASTEXITCODE -and $LASTEXITCODE -ne 0) {
    throw "Edge exited with code $LASTEXITCODE."
}

if (-not (Test-Path -LiteralPath $output)) {
    throw 'Edge did not create Resume.pdf.'
}

Write-Host "Rendered $output"
