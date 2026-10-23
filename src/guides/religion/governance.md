# Religion Governance and Land

Open your religion through `/religion faith` to manage its leadership, clergy, bank, notices, and land. The actions available to you depend on your rank.

## Religious heads and councils

A religion has either one religious head or a council. A single religious head makes policy decisions directly. A council votes on policy proposals; a proposal needs more than half of its occupied seats to approve, including seats held by offline religious heads.

The proposer starts with a yes vote. Religious heads can change their votes while a proposal is pending, including the proposer. Proposals expire after 72 hours. A council with only one religious head makes decisions directly.

Religious heads choose a single head or council through the religion settings. Open `/religion faith constitution` to choose how successors are selected. Councils have up to five heads by default. The head rank can have a custom title, such as Pope, Patriarch, or Caliph.

## Choosing leadership

Governing authority and the right to select leaders are separate. The constitution offers three selection methods:

| Method | Who chooses leaders |
| --- | --- |
| Appointed by religious heads | Current heads appoint followers through leadership management. Council approval applies. |
| Elected by designated ranks | Followers holding any selected electoral rank vote for successors. |
| Elected by all followers | Every follower can vote for successors. |

Heads can also restrict eligibility to selected candidate ranks. With no candidate ranks selected, any follower can be considered. Existing heads cannot stand for an election to another head's seat or an additional seat.

For example, a religion can have one head titled Pope, a Cardinal electoral rank, and a Bishop candidate rank. Cardinals choose the next Pope from eligible bishops. Being a cardinal grants no governing powers by itself; policy decisions remain with the Pope.

Constitution changes follow the religion's policy process. A council's electoral ranks do not gain the right to vote on its policy proposals. Followers receive announcements when religious identity, leadership, or succession rules change.

## Succession elections

In an elective religion, a head can open their own succession election from the constitution menu. A council can also approve an election for an additional seat within its head limit. Staff can open an election to replace inactive leadership, cancel an election, or replace a head directly. Inactivity does not automatically open an election.

1. Opening an election fixes its eligible voters and candidates. Followers added or given electoral ranks afterward cannot join that election's electorate. Holding several electoral ranks still gives one vote.
2. Nominations last 24 hours by default. Eligible followers use `/religion faith succession` and select Stand for leadership to nominate themselves.
3. Voting then lasts up to 48 hours by default. Eligible voters select a candidate in the same menu. They can change their ballot while the election remains open.
4. A candidate wins as soon as they receive more than half of the frozen electorate's votes, including voters who are offline. The winner replaces the retiring head or fills the additional council seat.

Voters and candidates must still belong to the religion when voting; votes from departed followers do not count. The electorate's size stays fixed. Normal leadership actions cannot change the frozen voter list or constitution while the election is open.

The current head stays in office until a successor wins. If nobody reaches a majority before voting expires, the election closes and leadership stays as it was. Eligible followers receive an election reminder on login. Reopen the succession menu to refresh its phase, remaining time, and ballots.

## Clergy ranks

Religious heads create ranks such as priest, bishop, or mufti and assign them to followers. Each rank has a priority and can receive powers to:

- Invite towns and approve applications.
- Manage ranks and appoint followers to them.
- Withdraw from the shared bank.
- Manage religious land and its permissions.

Rank priority restricts whom an officer can manage. A clergy title by itself grants only the powers assigned to its rank.

Leaving an affiliated town suspends your religious ranks and powers. If you join another town of the same religion within 72 hours, your remembered ranks return. After that grace period, leadership must appoint you again.

## Chat, notices, and backgrounds

Use `/religion faith chat <message>` to talk to followers across towns and nations.

Religious heads can set a religion notice and enable or disable its login messages. Followers can mute login notices for themselves from the main menu.

Religious heads also choose the menu background shown to their followers. The background picker includes a preview before applying the choice.

## Map colors

Religious heads can choose a color for Meridian's Religion map mode. Open `/religion faith`, select Settings, then Map color. Enter a Towny nation color name such as `red`, a six-digit hex color such as `#3388ff`, or `auto` to use the generated color. Council approval applies.

The chosen color appears on affiliated towns' territory and beside the religion's name in the map legend. Political mode uses nation colors, with nationless towns sharing the default blue color.

## Shared bank

Every religion has a shared bank, separate from town and nation banks. Open it with `/religion faith bank`.

Followers can deposit personal funds. Religious heads and ranks with bank withdrawal power can withdraw to their personal balance. The bank also receives income from Providence and Outsider tax when those [mechanics](./mechanics.md) are active.

## Tithes

Each affiliated town pays a tithe into its religion's bank every Towny day. The default is 1% of the town's daily upkeep, paid in addition to normal upkeep. For example, a town with 1,000 ducats of upkeep pays 10 ducats to its religion at 1%.

Religious heads can change the rate in `/religion faith bank`, up to 10% by default. Council approval applies. A rate of 0% waives tithes for the religion. Tithes do not use a mechanic slot and are separate from Outsider tax.

The amount uses Towny's calculated upkeep, including any overclaim penalty, and rounds down to whole cents. Towns with no positive upkeep, ruined or bankrupt towns, and towns unable to afford the full tithe do not pay. An unpaid tithe does not create debt or accumulate arrears.

## Religious plots

Religions can own plots inside existing Towny towns. These plots appear as `R` on the Towny map. The surrounding claim remains part of its town.

Stand in a plot and open the Current plot menu in `/religion` to grant it to a religion. Town officials who can claim land can grant plots. A personal plot owner can donate their own plot only if the town has enabled resident donations; donations are off by default. The mayor can change that setting in the town menu.

Religious land managers set build, destroy, switch, and item-use permissions for ranks across the religion's plots. Individual plots can override those rules. Use the Current plot menu to manage an owned plot or release it. Releasing a plot restores its previous ownership and plot settings.
