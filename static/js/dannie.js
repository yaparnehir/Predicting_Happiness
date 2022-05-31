// Sort the data array using the greekSearchResults value
data.sort(function(a, b) {
    return parseFloat(b.Happiness_score) - parseFloat(a.Happiness_score);
  });
  
  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);
  
  // Reverse the array due to Plotly's defaults
  data = data.reverse();
  
  // Trace1 for the Greek Data
  var trace1 = {
    x: data.map(row => row.Healthy_life_expectancy),
    y: data.map(row => row.Country),
    text: data.map(row => row.Happiness_score),
    name: "High Life",
    type: "bar",
    orientation: "h"
  };
  
  // data
  var data = [trace1];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Life Expectancy by Happiness",
    color: 'rbg(128, 0, 128)',
    autosize: false,
    paper_bgcolor: '#dcecf7',
    plot_bgcolor: '#ebeff2',
    width: 900,
    height: 1000
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  