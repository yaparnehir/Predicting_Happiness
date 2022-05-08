# Final_Project
## Topic
> <b> To be update <b>
    
### The reason why we selected this topic
> <b> To be update <b>
    
### Description of the source data
> <b> To be update <b>
    
### Questions we hope to answer
* What is the correlation between happiness and income?
* How employement status effect on happiness ?
* Can overall poverty in indivual country lower the expectation ? 
* Can we create a heat map regarding to our results to see if there is a relation between geolocation and income-happiness data results ?
* What other factors contribute to happiness? Can we find features which can predict happiness more accurately?
    
## Datasets
* <b> To be update <b>

## FlowChart
<p align="center">
    <img src="https://github.com/yaparnehir/Final_Project/blob/62e8faf94e11c4c89158f7a7c343b713442d8ebd/Images/Final_Project%20Flowchart.png"> 
</p>  
<br>  

## Roles
### Square
Nehir
- Responsible for the repository
- Make sure everyone has a branch on their own
- Watching all the process was made in branches, keep the updates.
- Testing, discussing before merging into a main branch.
    
### Triangle
Nusrat
- Contribute to data cleaning and processing;
    - Data preparation is likely to be iterative with model evaluation
- Select model(s) for the data in consultation with the group;
- Train, evaluate and improve model(s)
    - Run model, evaluate performance, re-asses feature selection and/or model specification if needed;
- Interprete findings.
    
### Circle
Amanda
    
### X Role
    
Kartikye
- discuss how data will be cleaned then merged, may need to create additonal tables in database to export
- assist <b>Amanda</b> in laying down framework for SQL files
-If group pace is faster then project timeline begin research into establishing "github pages" to create website visual
    - look to previous modules for guidance/look to TA's for insight
- assist <b>Nusrat</b> with machine learning model or creating correlation chart/matrix

### Visualization
    
Danielle
- Discuss ideas for possible visuals for the final project.
- Look over data to see what visual applications may fit.
    
## Technology

### Data Preprocessing

- Python
- Jupyter Notebook
- Matplotlib

### Database Storage

- PostgreSQL
- pgAdmin4

### Machine Learning

SciKitLearn - machine learning library to fit the model.

### Dashboard

- Tableau - to create a dashboard displaying the results of our analysis.
- GitHub - ReadMe and files for project

## Segment I: Sketch It Out!

- First segment list of deliverables:

    - Finalize dataset for the project
    - Making a flowchart
    - Identification of technology
    - Creating database
    - Mockup of machine learning
 
### Exploratory Data Analysis (ERD)

#### Entity Relationship Diagram (ERD)

#### Database Storage Set up
    
### Machine Learning mockup
    
##### Description of the preliminary data processing
    
- As of 3 May 2022, data processing included:
    - Dropping uneccesary columns;
    - Merging potentially significant feature from external sources;
    - Fitting a multiple linear regression model to check model fit.
- Immediate next steps are:
    - Creating a dictionary to accurately merge data from different sources (since Country names may not be standardized across all sources);
    - Explore correlation of potential features with the target.

##### Description of preliminary feature selection
    
Some of the features come with the dataset. These are indicators which the publishers believe to be the determinants of happiness, namely:
    - GDP per capita (log);
    - Social suppport;
    - Healthy life expectancy;
    - Freedom to make life choices;
    - Generosity;
    - Perception of corruption.

There are other factors which may influence happiness and these will be explored. Some examples are:
    - Income inequality;
    - Unemployment rate;
    - Crime rate;
    - Pollution;
    - Trust (interpersonal, as social capital).

##### Explanation of model choice
    
As both target and predictors are continuous variables, a natural choice of model is **Multiple Least Squares Regression**. If the relationships between the target and one or more of the features are not linear, **Polynomial Regression** and/or **Neural Network** can be explored. If the target is transformed into categories by ranges of happiness score, **Logistic Regression** and/or **Randon Forest** can be used.


## Acknowledgement
- [World Happinessdata](https://worldhappiness.report/ed/2021/)
    - Citation:Helliwell, John F., Richard Layard, Jeffrey Sachs and Jan-Emmanuel De Neve, eds. 2020. World Happiness Report 2020. New York: Sustainable Development Solutions Network
- [Unemployment_Data_2021](https://github.com/yaparnehir/Final_Project/blob/f72b4a866c1284cc01315dc9db79fd6bb1c64893/Resources/Unemployment_data_2021.csv)
    - International Labour Organization, ILOSTAT database
