function billGenerate() {
    // Default Charges Of TVL
    var domesticTVL = 35;
    var commercialIndustrialTVL = 60;

    // Default Charges Of GST
    var GST = 17.2;
    
    // Default Charges Of Electricity duty
    var getduty = document.getElementById('getduty');
    var electricityDuty = getduty.options[getduty.selectedIndex].value;

    // Get user input for units
    var getUnit = document.getElementById('getUnit').value;

    var domesticCharges=1.5;
    var commercialCharges=2;
    var industrialCharges=1.5;
    var bulkCharges=2;
    var agricultureCharges=1;

    if((electricityDuty != 0) && (getUnit != 0) ){
        if(getUnit <= 0 ){
            alert("Invalid Units, Please Re-Enter Again")
        }
        // Domestic Charges
        else if(electricityDuty == domesticCharges){
            if((getUnit <= 100) && (getUnit > 0)){
                totalUnitCharges = (getUnit*5.79);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withDomesticCharges = (totalUnitCharges / 100) * domesticCharges; 
                console.log("Total Duty" , withDomesticCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withDomesticCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2));
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withDomesticCharges = (totalUnitCharges / 100) * domesticCharges; 
                console.log("Total Duty" , withDomesticCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withDomesticCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2));
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withDomesticCharges = (totalUnitCharges / 100) * domesticCharges; 
                console.log("Total Duty" , withDomesticCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withDomesticCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2));
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withDomesticCharges = (totalUnitCharges / 100) * domesticCharges; 
                console.log("Total Duty" , withDomesticCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withDomesticCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2));
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withDomesticCharges = (totalUnitCharges / 100) * domesticCharges; 
                console.log("Total Duty" , withDomesticCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withDomesticCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + domesticTVL + withDomesticCharges).toFixed(2));
            } 
        }

        // Commercial Charges
        else if(electricityDuty == commercialCharges){
            if((getUnit <= 100) && (getUnit > 0)){
                totalUnitCharges = (getUnit*5.79);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Commercial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2);
                // alert(totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Commercial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2));
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Commercial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2));
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Commercial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2));
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Commercial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withcommercialCharges).toFixed(2));
            } 
        }
        
        // Industrial Charges
        else if(electricityDuty == industrialCharges){
            if((getUnit <= 100) && (getUnit > 0)){
                totalUnitCharges = (getUnit*5.79);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Industrial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2);
                // alert(totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Industrial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2));
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Industrial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2));
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Industrial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2));
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Industrial TVL" , commercialIndustrialTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + commercialIndustrialTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + commercialIndustrialTVL + withindustrialCharges).toFixed(2));
            } 
        }

        // Bulk Charges
        else if(electricityDuty == bulkCharges){
            if((getUnit <= 100) && (getUnit > 0)){
                totalUnitCharges = (getUnit*5.79);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST  + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST  + withbulkCharges).toFixed(2);
                // alert(totalUnitCharges + withGST + domesticTVL + withbulkCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withbulkCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withbulkCharges).toFixed(2));
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withbulkCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withbulkCharges).toFixed(2));
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withbulkCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withbulkCharges).toFixed(2));
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withbulkCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withbulkCharges).toFixed(2));
            } 
        }

        // Agriculture Charges
        else if(electricityDuty == agricultureCharges){
            if((getUnit <= 100) && (getUnit > 0)){
                totalUnitCharges = (getUnit*5.79);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withagricultureCharges).toFixed(2);
                // alert(totalUnitCharges + withGST + withagricultureCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withagricultureCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withagricultureCharges).toFixed(2));
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withagricultureCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withagricultureCharges).toFixed(2));
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withagricultureCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withagricultureCharges).toFixed(2));
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = (totalUnitCharges + withGST + withagricultureCharges).toFixed(2);
                // alert((totalUnitCharges + withGST + withagricultureCharges).toFixed(2));
            } 
        }
    }
    else{
        alert("Please Enter Here Value For Generating Bill! ")
    }
    

}