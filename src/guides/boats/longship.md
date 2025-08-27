# Longship

![longship](../../assets/longship.png)

## Movement Stats

| Property                  | Value | Unit    | Description |
|---------------------------|-------|---------|-------------|
| Speed                     | 20.0  | m/s     | Maximum speed. |
| Acceleration              | 2.2   | m/s²    | Rate of speed increase. |
| Drag                      | 0.009 | coeff   | Slowdown factor. |
| Angular Speed             | 2.4   | deg/s   | Maximum turning speed. |
| Angular Acceleration      | 2.6   | deg/s²  | Rate of turning increase. |
| Min Speed for Turn        | 0.01  | m/s     | Minimum speed required to turn. |
| Max Turn Effectiveness    | 1.0   | coeff   | Peak turning efficiency. |
| Max Heel                  | 2.5   | deg     | Maximum lean angle during turns. |
| Heel Speed                | 5.3   | -       | Rate of leaning into a turn. |
| Heel Recovery Speed       | 8.3   | -       | Rate of returning to upright. |
| Max Rowing Contribution   | 0.9   | -       | Rowing's share of max speed (with no rowers and full sails, reaches 10% max speed). |
| Input Type                | ad    | -       | Control scheme (A/D for turning, rowing/sail hybrid forward). |

### Structure Stats

| Property    | Value           |
|-------------|-----------------|
| Dimensions  | 5.0 x 7.0 x 22.0 |
| Offset      | 0.0, 3.0, 0.0  |

| HP Section | Value |
|------------|-------|
| Bow        | 6.0  |
| Hull       | 9.0  |
| Mast       | 5.0  |
| Stern      | 7.0  |

The longship has no inventory or siege weapon slots.
