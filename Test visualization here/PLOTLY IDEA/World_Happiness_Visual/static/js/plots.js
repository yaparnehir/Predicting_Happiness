
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    d3.json("../static/json/happy_complete.json").then((data) => {
        const dataset = data;
        /*         for(i = 0; i<data.length; i++){
                    var CountryNames = Object.keys(data);
                } */
        for (i = 0; i <= dataset.length; i++) {
            CountryNames = dataset.map(row => row.Country);

        };
        console.log(dataset);
        CountryNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
        // Use the first sample from the list to build the initial plots
        var firstSample = CountryNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);


    });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(sample) {
    d3.json("../static/json/happy_complete.json").then((data) => {
        var metadata = data;




        //console.log(metadata);
        // Filter the data for the object with the desired sample number
        var resultArray = metadata.filter(sampleObj => sampleObj.Country == sample);
        var result = resultArray[0];
        console.log(result);
        // Use d3 to select the panel with id of `#sample-metadata`
        var PANEL = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        PANEL.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);//this is referring to id=sample-metadata
        });

    });
}
// ^^^^^ code above works in displaying country dropdown menu and info panel ^^^^^^
//********************************************************************************************** */

// 1. Create the buildCharts function.
function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("../static/json/happy_complete.json").then((data) => {
        // 3. Create a variable that holds the samples array. 
        var reportArray = data;
        var report = reportArray[0];
        console.log(report);

        // 4. Create a variable that filters the Country for the object with the desired country name.
        var filteredArray = reportArray.filter(sampleObj => sampleObj.Country == sample); ///<<<
        console.log(filteredArray);

        var x_guage_values = filteredArray.map(row => row['Happiness score']);
        console.log(x_guage_values);

        guage_values = x_guage_values[0];


/*         // 7. Create the yticks for the bar chart.
        var yticks = 9;
        console.log(yticks);

        // 8. Create the trace for the bar chart. 
        var barData = [{
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        // 9. Create the layout for the bar chart. 
        var barLayout = {
            title: "<b>Top 10 Bacteria Cultures Found</b>",
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: {
                color: 'white',
                weigt: 'bold'
            }
        };
        // 10. Use Plotly to plot the data with the layout. 
        Plotly.newPlot("bar", barData, barLayout); */





        // 4. Create the trace for the gauge chart.
        var gaugeData = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: guage_values,
            type: "indicator",
            mode: "gauge+number",
            title: { text: "<b><em>Happiness Score by Country</em></b>" },
            gauge: {
                bar: { color: "blue" },
                axis: { range: [null, 10], tickwidth: 6 },
                steps: [
                    { range: [0, 2], color: '#ff8c00'},
                    { range: [2, 4], color: '#ffad00'},
                    { range: [4, 6], color: '#92b73a' },
                    { range: [6, 8], color: '#4aa84e' },
                    { range: [8, 10], color: '#009a60' },
                ]

            }
        }];

        // 5. Create the layout for the gauge chart.
        var gaugeLayout = {
            width: 450,
            height: 445,
            margin: { t: 0, b: 0 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: {
                color: 'white',
                weigt: 'bold'
            }
        };

        // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    });
}