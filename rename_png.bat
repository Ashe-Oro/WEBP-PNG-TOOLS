@echo off
setlocal enabledelayedexpansion

REM First, rename all .webp files to random names
for %%f in (*.png) do (
    set "randName=!random!!random!!random!"
    ren "%%f" "!randName!.tmp"
)

REM Now, rename the randomly named files sequentially
set count=1
for %%f in (*.tmp) do (
    ren "%%f" "!count!.png"
    set /a count+=1
)

echo All files have been renamed.

endlocal
