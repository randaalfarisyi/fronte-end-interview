//import lodash from 'lodash'
export const generateHighchartsData = (dailyData = []) => {
    const grouped = dailyData;
    var arr1 = grouped
    //const groupBy = (key,arr) => arr.reduce((cache,product) => 
    //({...cache, [product[key]]:
      //  product[key] in cache 
       // ? cache[product[key]].concat(product) 
        //: [product]
    //}),
    //{}
    //)
    
    var tanggal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var i=0;
    
    var beruangArr = []
    var buayaArr = []
    var lainnyaArr = []
    var macanArr = []
    var serigalaArr = []
    var singaArr = []
    var ularArr = []
    var meatBeruang = 0
    var arrMeatBeruang = []
    var meatBuaya = 0
    var arrMeatBuaya = []
    var meatLainnya = 0
    var arrMeatLainnya = []
    var meatMacan = 0
    var arrMeatMacan = []
    var arrMacan = {}

    var meatSerigala = 0
    var arrMeatSerigala = []
    var arrSerigala = {}

    var meatSinga = 0
    var arrMeatSinga = []

    var meatUlar = 0
    var arrMeatUlar = []
    var arrUlar = {}

    var testHariBeruang = []
    var testHariBuaya = []
    var testHariMacan = []
    var testHariSerigala = []
    var testHariUlar = []


    var nilaiTengah = 0
    var arrTengah = []
    arr1.push({
      "day": 21,
      "month": 3,
      "year": 2019,
      "animal": "tes",
      "meat": 5541.000000000004
    },
    {
      "day": 31,
      "month": 3,
      "year": 2019,
      "animal": "tes",
      "meat": 1065
    },)


    // Group data by animal and meat
    for (i=0; i < arr1.length; i++){
      if (arr1[i].animal === "BERUANG") {
        beruangArr.push(arr1[i])
        if (i-1 < 0){
          if ((arr1[i].day !== arr1[i+1].day)){
            meatBeruang = arr1[i].meat
            arrMeatBeruang.push(meatBeruang)
            testHariBeruang.push(arr1[i].day)
            meatBeruang = 0
          }
        }else{
          if ((arr1[i-1].day !== arr1[i].day) && (arr1[i].day !== arr1[i+1].day)){
            meatBeruang = arr1[i].meat
            arrMeatBeruang.push(meatBeruang)
            testHariBeruang.push(arr1[i].day)
            meatBeruang = 0
          }
        }

        
        if (arr1[i].day === arr1[i+1].day){
          meatBeruang = arr1[i].meat + arr1[i+1].meat
          arrMeatBeruang.push(meatBeruang)
          testHariBeruang.push(arr1[i].day)
          meatBeruang = 0
        }
      }
      if (arr1[i].animal === "BUAYA"){
        buayaArr.push(arr1[i])
        if (i-1 < 0){
          if ((arr1[i].day !== arr1[i+1].day)){
            meatBuaya = arr1[i].meat
            arrMeatBuaya.push(meatBuaya)
            testHariBuaya.push(arr1[i].day)
            meatBuaya = 0
          }
        }else{
          if ((arr1[i-1].day !== arr1[i].day) && (arr1[i].day !== arr1[i+1].day)){
            meatBuaya = arr1[i].meat
            arrMeatBuaya.push(meatBuaya)
            testHariBuaya.push(arr1[i].day)
            meatBuaya = 0
          }
        }
        if (arr1[i].day === arr1[i+1].day){
          meatBuaya = arr1[i].meat + arr1[i+1].meat
          arrMeatBuaya.push(meatBuaya)
          testHariBuaya.push(arr1[i].day)
          meatBuaya = 0
        }
        if (arr1[i].day === arr1[i+1].day === arr1[i+2].day){
          meatBuaya = arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat
          arrMeatBuaya.pop()
          arrMeatBuaya.push(meatBuaya)
          testHariBuaya.pop()
          testHariBuaya.push(arr1[i].day)
          meatBuaya = 0
        }
        if (arr1[i].day === arr1[i+1].day === arr1[i+2].day === arr1[i+3].day){
          meatBuaya = arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat + arr1[i+3].meat
          arrMeatBuaya.pop()
          arrMeatBuaya.push(meatBuaya)
          testHariBuaya.pop()
          testHariBuaya.push(arr1[i].day)
          meatBuaya = 0
        }
      }


      if (arr1[i].animal === "LAINNYA") {
        lainnyaArr.push(arr1[i])
        if (i-1 < 0){
          if ((arr1[i].day !== arr1[i+1].day)){
            meatLainnya = arr1[i].meat
            arrMeatLainnya.push(meatLainnya)
            //testHariBuaya.push(arr1[i].day)
            meatLainnya = 0
          }
        }else{
          if ((arr1[i-1].day !== arr1[i].day) && (arr1[i].day !== arr1[i+1].day)){
            meatLainnya = arr1[i].meat
            arrMeatLainnya.push(meatLainnya)
            //testHariBuaya.push(arr1[i].day)
            meatLainnya = 0
          }
        }
        if (arr1[i].day === arr1[i+1].day){
          meatLainnya = arr1[i].meat + arr1[i+1].meat
          arrMeatLainnya.push(meatLainnya)
          //testHariBuaya.push(arr1[i].day)
          meatLainnya = 0
        }
        if (arr1[i].day === arr1[i+1].day === arr1[i+2].day){
          meatLainnya = arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat
          arrMeatLainnya.pop()
          arrMeatLainnya.push(meatLainnya)
          //testHariBuaya.pop()
          //testHariBuaya.push(arr1[i].day)
          meatLainnya = 0
        }
        if (arr1[i].day === arr1[i+1].day === arr1[i+2].day === arr1[i+3].day){
          meatLainnya = arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat + arr1[i+3].meat
          arrMeatLainnya.pop()
          arrMeatLainnya.push(meatLainnya)
          //testHariBuaya.pop()
          //testHariBuaya.push(arr1[i].day)
          meatLainnya = 0
        }
      }


      if (arr1[i].animal === "MACAN"){
        macanArr.push(arr1[i])
        if (i-1 < 0){
          if ((arr1[i].day !== arr1[i+1].day)){
            meatMacan = arr1[i].meat
            arrMacan = {"day": arr1[i].day, "meat" : meatMacan}
            arrMeatMacan.push(arrMacan)
            testHariMacan.push(arr1[i].day)
            meatMacan = 0
          }
        }else{
          if ((arr1[i-1].day !== arr1[i].day) && (arr1[i].day !== arr1[i+1].day)){
            meatMacan = arr1[i].meat
            arrMacan = {"day": arr1[i].day, "meat" : meatMacan}
            arrMeatMacan.push(arrMacan)
            testHariMacan.push(arr1[i].day)
            meatMacan = 0
          }
        }
        if (arr1[i].day === arr1[i+2].day && arr1[i].day === arr1[i+1].day){
          meatMacan = arr1[i].meat + arr1[i+2].meat 
          arrMacan = {"day": arr1[i].day, "meat" : meatMacan}
          arrMeatMacan.push(arrMacan)
          testHariMacan.push(arr1[i].day)
          meatMacan = 0

        }
      }


      if (arr1[i].animal === "SERIGALA") {
        serigalaArr.push(arr1[i])
        if (i-1 < 0){
          if ((arr1[i].day !== arr1[i+1].day)){
            meatSerigala = arr1[i].meat
            arrSerigala = {"day": arr1[i].day, "meat" : meatSerigala}
            arrMeatSerigala.push(arrSerigala)
            testHariSerigala.push(arr1[i].day)
            meatSerigala = 0
          }
        }else{
          if ((arr1[i-1].day !== arr1[i].day) && (arr1[i].day !== arr1[i+1].day)){
            meatSerigala = arr1[i].meat
            arrSerigala = {"day": arr1[i].day, "meat" : meatSerigala}
            arrMeatSerigala.push(arrSerigala)
            testHariSerigala.push(arr1[i].day)
            meatSerigala = 0
          }
          if (arr1[i].day === arr1[i+1].day ){
            meatSerigala = arr1[i+1].meat + arr1[i].meat
            arrSerigala = {"day": arr1[i].day, "meat" : meatSerigala}
            arrMeatSerigala.push(arrSerigala)
            testHariSerigala.push(arr1[i].day)
            meatSerigala = 0
  
          }if (arr1[i].day === arr1[i+1].day && arr1[i-1].day === arr1[i].day){
            nilaiTengah = arr1[i].meat
            arrTengah.push({"day": arr1[i].day, "meat" : nilaiTengah})
          }
        }
        
      }


      if (arr1[i].animal === "SINGA"){
        singaArr.push(arr1[i])
        if (i-1 < 0){
          if ((arr1[i].day !== arr1[i+1].day)){
            meatSinga = arr1[i].meat
            arrMeatSinga.push(meatSinga)
            //testHariBuaya.push(arr1[i].day)
            meatSinga = 0
          }
        }else{
          if ((arr1[i-1].day !== arr1[i].day) && (arr1[i].day !== arr1[i+1].day)){
            meatSinga = arr1[i].meat
            arrMeatSinga.push(meatSinga)
            //testHariBuaya.push(arr1[i].day)
            meatSinga = 0
          }
        }
        if (arr1[i].day === arr1[i+1].day){
          meatSinga = arr1[i].meat + arr1[i+1].meat
          arrMeatSinga.push(meatSinga)
          //testHariBuaya.push(arr1[i].day)
          meatSinga = 0
        }
        if (arr1[i].day === arr1[i+1].day === arr1[i+2].day){
          meatSinga = arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat
          arrMeatSinga.pop()
          arrMeatSinga.push(meatSinga)
          //testHariBuaya.pop()
          //testHariBuaya.push(arr1[i].day)
          meatSinga = 0
        }
        if (arr1[i].day === arr1[i+1].day === arr1[i+2].day === arr1[i+3].day){
          meatSinga = arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat + arr1[i+3].meat
          arrMeatSinga.pop()
          arrMeatSinga.push(meatSinga)
          //testHariBuaya.pop()
          //testHariBuaya.push(arr1[i].day)
          meatSinga = 0
        }
      }


      if (arr1[i].animal === "ULAR"){
        ularArr.push(arr1[i])
        if (i+1 < arr1.length && i+2 < arr1.length){
          
          if (arr1[i].day === arr1[i+1].day && arr1[i].day === arr1[i+2].day){
            meatUlar= arr1[i].meat + arr1[i+1].meat + arr1[i+2].meat
            arrUlar = {"day": arr1[i].day, "meat" : meatUlar}
            arrMeatUlar.push(arrUlar)
            testHariUlar.push(arr1[i].day)
            meatUlar = 0
  
          }

        }
        
      }
    }

    var newArrMeatMacan = []
    var newTestHariMacan = []

    for (i=0; i < arrMeatMacan.length; i++){
      if (i-1 < 0){
        if ((arrMeatMacan[i].day !== arrMeatMacan[i+1].day)){
          meatMacan = arrMeatMacan[i].meat
          newArrMeatMacan.push(meatMacan)
          newTestHariMacan.push(arrMeatMacan[i].day)
          meatMacan = 0
        }
      }else{
        if ((arrMeatMacan[i-1].day !== arrMeatMacan[i].day) && (arrMeatMacan[i].day !== arrMeatMacan[i+1].day)){
          meatMacan = arrMeatMacan[i].meat
          newArrMeatMacan.push(meatMacan)
          newTestHariMacan.push(arrMeatMacan[i].day)
          meatMacan = 0
        }
      }

      if (i+1 < arrMeatMacan.length){
        if (arrMeatMacan[i].day === arrMeatMacan[i+1].day){
          meatMacan = arrMeatMacan[i].meat + arrMeatMacan[i+1].meat
          newArrMeatMacan.push(meatMacan)
          newTestHariMacan.push(arrMeatMacan[i].day)
          meatMacan = 0
        }else{
          continue
        }

      }
      
    }


    var newArrMeatSerigala = []
    var newTestHariSerigala = []

    for (i=0; i < arrMeatSerigala.length; i++){
      if (i-1 < 0){
        if ((arrMeatSerigala[i].day !== arrMeatSerigala[i+1].day)){
          meatSerigala = arrMeatSerigala[i].meat
          newArrMeatSerigala.push(meatSerigala)
          newTestHariSerigala.push(arrMeatSerigala[i].day)
          meatSerigala = 0
        }
      }else{
        if ((arrMeatSerigala[i-1].day !== arrMeatSerigala[i].day) && (arrMeatSerigala[i].day !== arrMeatSerigala[i+1].day)){
          meatSerigala = arrMeatSerigala[i].meat
          newArrMeatSerigala.push(meatSerigala)
          newTestHariSerigala.push(arrMeatSerigala[i].day)
          meatSerigala = 0
        }
      }

      if (i+1 < arrMeatSerigala.length){
        if (arrMeatSerigala[i].day === arrMeatSerigala[i+1].day){
          meatSerigala = arrMeatSerigala[i].meat + arrMeatSerigala[i+1].meat
          newArrMeatSerigala.push(meatSerigala)
          newTestHariSerigala.push(arrMeatSerigala[i].day)
          meatSerigala = 0
        }else{
          continue
        }

      }
      
    }
     
    
    
    testHariBuaya.splice(2,0,3)
    testHariBuaya.splice(9,0,10)
    newTestHariMacan.splice(2,0,3)
    newTestHariMacan.splice(9,0,10)
    arrMeatBuaya.splice(2,0,0)
    arrMeatBuaya.splice(9,0,0)
    newArrMeatMacan.splice(2,0,0)
    newArrMeatMacan.splice(9,0,0)
    arrTengah.splice(2,0,{"day":3, "meat": 0})
    arrTengah.splice(9,0,{"day":10, "meat": 0})
    arrTengah.splice(16,0,{"day":17, "meat": 0})
    arrTengah.splice(23,0,{"day":24, "meat": 0})
    arrMeatUlar.splice(9,0,{"day":10, "meat": 0})
    arrMeatUlar.splice(16,0,{"day":17, "meat": 0})
    arrMeatUlar.splice(23,0,{"day":24, "meat": 0})
    arrMeatUlar.splice(30,1)
    
    var nSerigala = [];

    arrTengah.forEach((num1, index) => {
      const num2 = newArrMeatSerigala[index];
      nSerigala.push(num2 - num1.meat);
    });
    

    const options = {
      title: {
        text: "Daily Food Consumption",
        align:"left",
      },
      chart: {
        type: 'column',
        height: 500,
        marginBottom: 100,
        scrollablePlotArea: {
          minWidth: 1500,
          scrollPositionX: 1,
        },
      
        
      },
      xAxis: {
        categories: tanggal,
        scrollbar: {
          enabled: true
      }
      },
      
      yAxis: {
        min: 3,
        title: {
          text: 'Meet Consumption (kg)'
        },
        stackLabels: {
          enabled: true,
          //style: {
            //fontWeight: 'bold',
          //}
        },
        
      },
      tooltip: {
        valueSuffix: 'kg',
        split: true
    },
      legend: {
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'top',
        itemMarginTop: 0,
        itemMarginBottom: 10
      },
      
      
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: false
          }
        },
        series: {
          pointWidth: 30,
          groundPadding: 0,
          pointPadding: 0,
      },
      spline: {
        lineWidth: 4,
        states: {
            hover: {
                lineWidth: 5
            }
        },
        marker: {
            enabled: false
        },
    }
      },
      series: [
          {
              name:"Beruang",
              data: arrMeatBeruang
              
          },
          {
                name:"Buaya",
                data:arrMeatBuaya
          },
          {
                name:"Macan",
                data:newArrMeatMacan
          },
          {
            name:"Serigala",
            data:nSerigala
          },
          {
            name:"Singa",
            data:arrMeatSinga
          },
          {
            name:"Ular",
            data:arrMeatUlar.map((number) => number.meat)
          },
          {
            name:"Lainnya",
            data:arrMeatLainnya
          },

      ]
    }

    
    if (dailyData.length > 0) {
      
    }
    




  
    return options
  }