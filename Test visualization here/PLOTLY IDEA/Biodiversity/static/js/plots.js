
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    d3.json("../static/json/happy_complete.json").then((data) => {
        const dataset = data;
/*         for(i = 0; i<data.length; i++){
            var CountryNames = Object.keys(data);
        } */
        for(i=0; i <= dataset.length; i++){
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
    d3.json("samples.json").then((data) => {
        // 3. Create a variable that holds the samples array. 
        var samplesArray = data.samples;
        console.log(samplesArray)

        // 4. Create a variable that filters the samples for the object with the desired sample number.
        var filteredArray = samplesArray.filter(sampleObj => sampleObj.id == sample);
        console.log(filteredArray)

        // D.3.1. Create a variable that filters the metadata array for the object with the desired sample number.
        var metadata = data.metadata;
        var filtered2 = metadata.filter(sampleObj => sampleObj.id == sample);

        // D.3.2. Create a variable that holds the first sample in the metadata array.
        var result = filtered2[0];

        //  5. Create a variable that holds the first sample in the array.
        var theSample = filteredArray[0]
        console.log(theSample)

        // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otu_ids = theSample.otu_ids
        var otu_labels = theSample.otu_labels
        var sample_values = theSample.sample_values
        console.log(otu_ids)
        console.log(otu_labels)
        console.log(sample_values)

        // D.3.3. Create a variable that holds the washing frequency.
        var wfreq = parseFloat(result.wfreq)
        console.log(wfreq)

        // 7. Create the yticks for the bar chart.
        // Hint: Get the the top 10 otu_ids and map them in descending order  
        //  so the otu_ids with the most bacteria are last. 

        var yticks = otu_ids.slice(0, 10).map(ids => `OTU ${ids}`).reverse();
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
            paper_bgcolor:'rgba(0,0,0,0)',
            plot_bgcolor:'rgba(0,0,0,0)',
            font:{
                color:'white',
                weigt: 'bold'
            }
        };
        // 10. Use Plotly to plot the data with the layout. 
        Plotly.newPlot("bar", barData, barLayout);


        // DELIVERABLE 2
        // 1. Create the trace for the bubble chart.
        var bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Portland"
            }
        }];

        // 2. Create the layout for the bubble chart.
        var bubbleLayout = {
            title: "<b>Bacteria Cultures Per Sample</b>",
            xaxis: { title: "OTU ID" },
            paper_bgcolor:'rgba(0,0,0,0)',
            plot_bgcolor:'rgba(0,0,0,0)',
            font:{
                color:'white',
                weigt: 'bold'
            }
            

        };

        // 3. Use Plotly to plot the data with the layout.
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

        // DELERABLE 3 
        // 4. Create the trace for the gauge chart.
        var gaugeData = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: wfreq,
            type: "indicator",
            mode: "gauge+number",
            title: { text: "Belly Button Washing Frequency <br>Scrubs per Week " },
            gauge: {
                bar: { color: "blue" },
                axis: { range: [null, 10], tickwidth: 2 },
                steps: [
                    { range: [0, 2], color: "red" },
                    { range: [2, 4], color: "orange" },
                    { range: [4, 6], color: "yellow" },
                    { range: [6, 8], color: "lightgreen" },
                    { range: [8, 10], color: "green" },
                ]

            }
        }];

        // 5. Create the layout for the gauge chart.
        var gaugeLayout = {
            width: 450,
            height: 445,
            margin: { t: 0, b: 0 },
            paper_bgcolor:'rgba(0,0,0,0)',
            plot_bgcolor:'rgba(0,0,0,0)',
            font:{
                color:'white',
                weigt: 'bold'
            }
        };

        // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    });
}