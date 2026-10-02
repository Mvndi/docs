# Rowboat

![rowboat](../../assets/rowboat.png)

Construction cost of `500`, takes 20 mins to construct.  Need Rowing Arms skill at lvl 1.  The rowboat takes passive damage if it's in deep ocean biomes.  The rowboat gets 1 shot by any siege weapon (like ballista) reguardless of what health it's at.

## Movement Stats

(Rowing only; no sail or siege weapon slots.)

| Property                  | Value | Unit    | Description |
|---------------------------|-------|---------|-------------|
| Speed                     | 10.0  | m/s     | Maximum speed. |
| Acceleration              | 2.2   | m/s²    | Rate of speed increase. |
| Drag                      | 0.009  | coeff   | Slowdown factor. |
| Angular Speed             | 45.0  | deg/s   | Maximum turning speed. |
| Angular Acceleration      | 40.0  | deg/s²  | Rate of turning increase. |
| Min Speed for Turn        | 0.01  | m/s     | Minimum speed required to turn. |
| Max Turn Effectiveness    | 1.0   | coeff   | Peak turning efficiency. |
| Max Heel                  | 2.5   | deg     | Maximum lean angle during turns. |
| Heel Speed                | 5.3   | -       | Rate of leaning into a turn. |
| Heel Recovery Speed       | 8.3   | -       | Rate of returning to upright. |
| Max Rowing Contribution   | 1.0   | -       | Fully rowing-dependent propulsion. |
| Input Type                | ad    | -       | Control scheme (A/D for turning, rowing-based forward). |

### Structure Stats

Dimensions  | 2.0 x 3.0 x 8.0

| HP Section | Value |
|------------|-------|
| Bow        | 1.0  |
| Hull       | 1.0  |
| Mast       | 1.0  |
| Stern      | 1.0  |
