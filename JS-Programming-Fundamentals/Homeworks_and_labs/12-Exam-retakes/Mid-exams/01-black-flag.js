function blackFlag(arr) {
    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let targetPlunder = Number(arr.shift());

    let totalPlunder = 0;

    // every 3rd day - 150% DAILY plunder
    // every 5th day - lose 30% of TOTAL plunder

    // if total is mo

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 == 0) {
            totalPlunder += 0.5 * dailyPlunder;
        }

        if (i % 5 == 0) {
            totalPlunder *= 0.7;
        }
    }

    if(totalPlunder >= targetPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percentage = (totalPlunder/targetPlunder * 100).toFixed(2);

        console.log(`Collected only ${percentage}% of the plunder.`);
    }

}
blackFlag(['5', '40', '100']);
blackFlag(['10', '20', '380']);
