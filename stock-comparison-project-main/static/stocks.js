// On Initial Page Load
function init() {

// Read JSON in index.html and select dropdown button
    const data = JSON.parse(document.getElementById("jsonData1").textContent);
    // console.log(data);
    var dropdown = d3.select("#selDataset");

// Populate dropdown and make a list to select quarter option
    var quarterList = [];
    Object.entries(data).forEach(([k,v]) => {
        dropdown.append("option").text(k).property("value", k);
        quarterList.push(k);

    });
    // console.log(quarterList);

// Take the first quarter from quarter list and passes to createGraphs function to load initial page
    const firstQuarter = quarterList[0];
    createGraphs(firstQuarter);
}

// Function to refresh quarter data on change
init();

function optionChanged(quarter){
    createGraphs(quarter);
}

// Create Graphs
function createGraphs(quarter) {
// Pull JSON data from index.html
    const amazonData = JSON.parse(document.getElementById("jsonData1").textContent);
    const googleData = JSON.parse(document.getElementById("jsonData2").textContent);
//Select specific quarter in dropdown
    const amazonQuarterData = amazonData[quarter];
    const googleQuarterData = googleData[quarter];

// Amazon Quarterly Time Series Graph - Plotly
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'AMZN High',
        x: amazonQuarterData.Dates,
        y: amazonQuarterData.Highs,
        line: {color: '#17BECF'}
      }
      
      var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'AMZN Low',
        x: amazonQuarterData.Dates,
        y: amazonQuarterData.Lows,
        line: {color: '#7F7F7F'}
      }
      
      var data = [trace1,trace2];
      
      var layout = {
        title: 'Amazon Quarterly Time Series',
      };

    var config = {responsive:true}

    Plotly.newPlot('amazonline', data, layout, config);
 
    var trace3 = {
        type: "scatter",
        mode: "lines",
        name: 'GOOG High',
        x: googleQuarterData.Dates,
        y: googleQuarterData.Highs,
        line: {color: '#17BECF'}
    }
  
    var trace4 = {
        type: "scatter",
        mode: "lines",
        name: 'GOOG Low',
        x: googleQuarterData.Dates,
        y: googleQuarterData.Lows,
        line: {color: '#7F7F7F'}
  }
  
    var data2 = [trace3,trace4];
    
    var layout2 = {
        title: 'Google Quarterly Time Series',
    };
  
    Plotly.newPlot('googleline', data2, layout2, config);

//Candlestick Quarterly Charts - Plotly
    var candleTrace1 = {
        x: amazonQuarterData.Dates,
        close: amazonQuarterData.Closes,
        decreasing: {line: {color: '#7F7F7F'}},
        high: amazonQuarterData.Highs,
        increasing: {line: {color: '#17BECF'}},
        line: {color: 'rgba(31,119,180,1)'},
        low: amazonQuarterData.Lows,
        open: amazonQuarterData.Opens,  
        type: 'candlestick', 
        xaxis: 'x', 
        yaxis: 'y'
    };
  
    var candleData = [candleTrace1];
    
    var candleLayout = {
        title: 'Amazon Candlestick Chart',
        dragmode: 'zoom', 
        // margin: {
        //   r: 10, 
        //   t: 25, 
        //   b: 40, 
        //   l: 60
        // }, 
        showlegend: false, 
        xaxis: {
        autorange: true, 
        domain: [0, 1], 
        // range: [amazonQuarterData.Dates[0], amazonQuarterData.Dates[amazonQuarterData.Dates.length-1]],
        //   rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']}, 
        title: 'Date', 
        type: 'date'
        }, 
        yaxis: {
        autorange: true, 
        domain: [0, 1], 
        // range: [Math.min(amazonQuarterData.dates), Math.max(amazonQuarterData.dates)],
        type: 'linear'
        }
    };
  
    Plotly.newPlot('amazoncandles', candleData, candleLayout, config);

    var candleTrace2 = {
        x: googleQuarterData.Dates,
        close: googleQuarterData.Closes,
        decreasing: {line: {color: '#7F7F7F'}},
        high: googleQuarterData.Highs,
        increasing: {line: {color: '#17BECF'}},
        line: {color: 'rgba(31,119,180,1)'},
        low: googleQuarterData.Lows,
        open: googleQuarterData.Opens,  
        type: 'candlestick', 
        xaxis: 'x', 
        yaxis: 'y'
    };
  
    var candleData2 = [candleTrace2];
  
    var candleLayout2 = {
        title: 'Google Candlestick Chart',
        dragmode: 'zoom', 
        // margin: {
        //   r: 10, 
        //   t: 25, 
        //   b: 40, 
        //   l: 60
        // }, 
        showlegend: false, 
        xaxis: {
        autorange: true, 
        domain: [0, 1], 
        // range: [amazonQuarterData.Dates[0], amazonQuarterData.Dates[amazonQuarterData.Dates.length-1]],
        //   rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']}, 
        title: 'Date', 
        type: 'date'
        }, 
        yaxis: {
        autorange: true, 
        domain: [0, 1], 
        // range: [Math.min(amazonQuarterData.dates), Math.max(amazonQuarterData.dates)],
        type: 'linear'
        }
    };
  
    Plotly.newPlot('googlecandles', candleData2, candleLayout2, config);

}