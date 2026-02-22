# Big Doors

Doors can be created by using the `/bdm` command.

There's a video tutorial [here](https://www.youtube.com/watch?v=AYnM5divwN4)

## Power Blocks

Through the `/bdm` command's GUI menu, you can create a power block
and select a `Gearbox` so you don't have to use commands every time you
want to open your door.

### Pricing Table

| Door Type       | Price Formula                                 |
|-----------------|-----------------------------------------------|
| Standard Door   | `1000 + 500 + 2 * log(blockCount + 1)'`                      |
| Drawbridge      | `1500 + 600 * min(blockCount, 15)`                     |
| Portcullis      | `2000 + 800 + 2 * sqrt(blockCount)` |
| Sliding Door    | `1800 + 650 + 2 * blockCount^0.5`                     |
