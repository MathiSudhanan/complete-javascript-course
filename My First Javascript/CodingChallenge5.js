var billCalculator = function caculateBills(obj)
{
    console.log("family " +obj.name);
    var rule = obj.tipsRule;
    var billCount = 0;
    var totalTips = 0;
    obj.bills.forEach(bill => {
        if(bill.amount <= rule.levels[0])
        {
            bill.tips = bill.amount * (rule.percents[0]/100);
            bill.totalAmount = bill.amount + bill.tips;
        }
        else if(bill.amount > rule.levels[0] && bill.amount <=rule.levels[1])
        {
            bill.tips = bill.amount * (rule.percents[1]/100);
            bill.totalAmount = bill.amount + bill.tips;
        }
        else if(bill.amount > rule.levels[1])
        {
            bill.tips = bill.amount * (rule.percents[2]/100);
            bill.totalAmount = bill.amount + bill.tips;
        }
        billCount++;
        totalTips += bill.tips;
        
        console.log("Bill Amount :" + bill.amount +", Tips :" + bill.tips + ", Total Amount:" + bill.totalAmount);
    });
    obj.averageTips = totalTips / billCount;
    console.log("Average tips paid :" + obj.averageTips);
}

function main()
{
    var objBillsJohn ={
        name: 'John & Family',
        tipsRule : {
                        levels : [50,200],
                        percents : [20,15,10]
                    },
        bills : [
            {
                amount: 124,
            },
            {
                amount: 48,
            },
            {
                amount: 268,
            },
            {
                amount: 180,
            },
            {
                amount: 42,
            }
        ]
    };

    var objBillsMark ={
        name: 'Mark',
        tipsRule : {
                        levels : [100,300],
                        percents : [20,10,25]
                    },
        bills : [
            {
                amount: 77,
            },
            {
                amount: 375,
            },
            {
                amount: 110,
            },
            {
                amount: 45,
            }
        ]
    };
    billCalculator(objBillsJohn);
    billCalculator(objBillsMark);
    if(objBillsJohn.averageTips > objBillsMark.totalTips)
    {
        console.log("Family which paid highest tips : "+ objBillsJohn.name +" amount : " + objBillsJohn.averageTips);
    }
    else
    {
        console.log("Family which paid highest tips : "+ objBillsMark.name +" amount : " + objBillsMark.averageTips)
    }
        
}

main();