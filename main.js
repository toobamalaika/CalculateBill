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
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withDomesticCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withDomesticCharges);
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
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withDomesticCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withDomesticCharges);
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
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withDomesticCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withDomesticCharges);
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
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withDomesticCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withDomesticCharges);
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
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withDomesticCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withDomesticCharges);
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
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withcommercialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withcommercialCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withcommercialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withcommercialCharges);
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withcommercialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withcommercialCharges);
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withcommercialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withcommercialCharges);
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withcommercialCharges = (totalUnitCharges / 100) * commercialCharges; 
                console.log("Total Duty" , withcommercialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withcommercialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withcommercialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withcommercialCharges);
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
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withindustrialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withindustrialCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withindustrialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withindustrialCharges);
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withindustrialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withindustrialCharges);
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withindustrialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withindustrialCharges);
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withindustrialCharges = (totalUnitCharges / 100) * industrialCharges; 
                console.log("Total Duty" , withindustrialCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withindustrialCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withindustrialCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withindustrialCharges);
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
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withbulkCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withbulkCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withbulkCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withbulkCharges);
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withbulkCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withbulkCharges);
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withbulkCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withbulkCharges);
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withbulkCharges = (totalUnitCharges / 100) * bulkCharges; 
                console.log("Total Duty" , withbulkCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withbulkCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withbulkCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withbulkCharges);
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
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withagricultureCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withagricultureCharges);
            }

            else if((getUnit <= 200) && (getUnit > 101)){
                totalUnitCharges = (getUnit*8.11);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withagricultureCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withagricultureCharges);
            }

            else if((getUnit <= 300) && (getUnit > 201)){
                totalUnitCharges = (getUnit*10.20);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withagricultureCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withagricultureCharges);
            }

            else if((getUnit <= 700) && (getUnit > 301)){
                totalUnitCharges = (getUnit*17.60);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withagricultureCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withagricultureCharges);
            }

            else{
                totalUnitCharges = (getUnit*20.70);
                console.log("Total Units" , totalUnitCharges);
                withGST = (totalUnitCharges / 100) * GST; 
                console.log("Total GST" , withGST)
                withagricultureCharges = (totalUnitCharges / 100) * agricultureCharges; 
                console.log("Total Duty" , withagricultureCharges);
                console.log("Domestic TVL" , domesticTVL)
                var setTotalAmount = document.getElementById('totalUnit').innerHTML = totalUnitCharges;
                var setTotalAmount = document.getElementById('totalOther').innerHTML = withGST + domesticTVL + withagricultureCharges;
                var setTotalAmount = document.getElementById('totalBill').innerHTML = totalUnitCharges + withGST + domesticTVL + withagricultureCharges;
                // alert(totalUnitCharges + withGST + domesticTVL + withagricultureCharges);
            } 
        }
    }
    else{
        alert("Please Enter Here Value For Generating Bill! ")
    }
    

}