# Final_Project

### Presentation
- [Google_link](https://docs.google.com/presentation/d/1-ca_PUA9_yF3YS97lGx-sEBI-_E_apEggxzTPLh5tYU/edit?usp=sharing)

## Topic
> According to employment and income dataset, what is the correlation between happiness and economical factors ? Which factors has more affect on the topic ?
    
### Description of the source data
> Discussion and research process showed us the best and the most cleaned sets were 2021. After pandemic started globally we could see the analysis, surveys and results more easy since there are more tendency on those topics. Although the most recent one is 2022 datasets, we focused on the 2021. The reason is simply the year has not ended yet and it does not satisfy our expectations and they were incomplete.
    

### Questions we hope to answer
* The impact of various factors upon "Happiness" of a country?
* How employement status effect on happiness ?
* Can overall poverty in indivual country lower the expectation ? 
* Can we create a heat map regarding to our results to see if there is a relation between geolocation and income-happiness data results ?

* What other factors contribute to happiness? Can we find features which can predict happiness more accurately?
    

## Datasets
- [World_Happiness_Report_2021](https://www.kaggle.com/datasets/mathurinache/world-happiness-report?select=2021.csv)
- [Unemployment_data_2021.csv](https://github.com/yaparnehir/Final_Project/blob/a81f6fd344fe9690ee0cd27da7d06214f74a68a6/Resources/Unemployment_data_2021.csv)
    - For the Unemployment data, <em> please see "Acknowledgement" section at the bottom </em>

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
![Diagram](/Dataset%20diagram.PNG)
    
### X Role
Kartikye
- discuss how data will be cleaned then merged, may need to create additonal tables in database to export
- assist <b>Amanda</b> in laying down framework for SQL files
-If group pace is faster then project timeline begin research into establishing "github pages" to create website visual
    - look to previous modules for guidance/look to TA's for insight
- assist <b>Nusrat</b> with machine learning model or creating correlation chart/matrix

### Visualization
Danielle 
- Discuss ideas for possible visuals for the final project
- Look over data to see what visual applications may fit
   - Tableau and other applications are being considered.
- Also researching ideas for including interactivity and refering back to past modules.
## Methods 
> Unsupervised ML 
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
    
#### Description of the preliminary data processing
    
- As of 3 May 2022, data processing included:
    - Dropping uneccesary columns;
    - Merging potentially significant feature from external sources;
    - Fitting a multiple linear regression model to check model fit.
    
- Immediate next steps are:
    - Creating a dictionary to accurately merge data from different sources (since Country names may not be standardized across all sources);
    - Explore correlation of potential features with the target.

#### Description of preliminary feature selection
    
- Some of the features come with the dataset. These are indicators which the publishers believe to be the determinants of happiness, namely:
    - GDP per capita (log);
    - Social suppport;
    - Healthy life expectancy;
    - Freedom to make life choices;
    - Generosity;
    - Perception of corruption.


- There are other factors which may influence happiness and these will be explored. Some examples are:
    - Income inequality;
    - Unemployment rate;
    - Crime rate;
    - Pollution;
    - Trust (interpersonal, as social capital).


## Data Cleaning
> Drop extra columns , drop empty rows, check duplicates, making all the datasets country Indexes the same to make the joins without losing the data 

#### Explanation of model choice   
As both target and predictors are continuous variables, a natural choice of model is **Multiple Least Squares Regression**. If the relationships between the target and one or more of the features are not linear, **Polynomial Regression** and/or **Neural Network** can be explored. If the target is transformed into categories by ranges of happiness score, **Logistic Regression** and/or **Randon Forest** can be used.

## Acknowledgement
- [World Happinessdata](https://worldhappiness.report/ed/2021/)
    - Citation:Helliwell, John F., Richard Layard, Jeffrey Sachs and Jan-Emmanuel De Neve, eds. 2020. World Happiness Report 2020. New York: Sustainable Development Solutions Network
- [Unemployment_Data_2021](https://data.worldbank.org/indicator/sl.uem.totl.zs?end=2021&start=2000&view=map)

    - International Labour Organization, ILOSTAT database
