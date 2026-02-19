# Cog

![cog](../../assets/cog.png)

Construction cost of `15,000`, takes 48 hours to construct. Need Sea Worthy skill at lvl 1.

## Movement Stats

(Not Trebuchet capable, sail and no oars/rowing)

| Property                  | Value | Unit    | Description |
|---------------------------|-------|---------|-------------|
| Speed                     | 18.0  | m/s     | Maximum speed. |
| Acceleration              | 2.0   | m/s²    | Rate of speed increase. |
| Drag                      | 0.01  | coeff   | Slowdown factor. |
| Angular Speed             | 2.21  | deg/s   | Maximum turning speed. |
| Angular Acceleration      | 2.46  | deg/s²  | Rate of turning increase. |
| Min Speed for Turn        | 0.01  | m/s     | Minimum speed required to turn. |
| Max Turn Effectiveness    | 1.0   | coeff   | Peak turning efficiency. |
| Max Heel                  | 2.0   | deg     | Maximum lean angle during turns. |
| Heel Speed                | 5.0   | -       | Rate of leaning into a turn. |
| Heel Recovery Speed       | 8.0   | -       | Rate of returning to upright. |
| Max Rowing Contribution   | 0.0   | -       | Rowing's share of max speed (0 means no rowing, fully sail-dependent). |
| Input Type                | ad    | -       | Control scheme (A/D for turning, sail-based forward). |

(Trebuchet capable, no sail and only oars/rowing)

| Property                  | Value | Unit    | Description |
|---------------------------|-------|---------|-------------|
| Speed                     | 10.8  | m/s     | Maximum speed. |
| Acceleration              | 1.2   | m/s²    | Rate of speed increase. |
| Drag                      | 0.015  | coeff   | Slowdown factor. |
| Angular Speed             | 1.8  | deg/s   | Maximum turning speed. |
| Angular Acceleration      | 2.0  | deg/s²  | Rate of turning increase. |
| Min Speed for Turn        | 0.01  | m/s     | Minimum speed required to turn. |
| Max Turn Effectiveness    | 1.0   | coeff   | Peak turning efficiency. |
| Max Heel                  | 1.5   | deg     | Maximum lean angle during turns. |
| Heel Speed                | 4.0   | -       | Rate of leaning into a turn. |
| Heel Recovery Speed       | 7.0   | -       | Rate of returning to upright. |
| Max Rowing Contribution   | 1.0   | -       | Rowing's share of max speed (0 means no rowing, fully sail-dependent). |
| Input Type                | ad    | -       | Control scheme (A/D for turning, sail-based forward). |

### Structure Stats

5.0 x 9.0 x 22.0

| HP Section | Value |
|------------|-------|
| Bow        | 7.0  |
| Hull       | 10.0  |
| Mast       | 6.0  |
| Stern      | 8.0  |

The cog has an inventory with 3 pages, each double chest sized. It has two siege weapon slots (one front, one back) that can only take ballistas. It has a sail and no rowing seats. It cannot have ram and drum upgrades.
