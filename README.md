# Final_Project
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
- ETL Process
- Database and server adaptation
- Presentation
    
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

## Resources

### Softwares

- Python
- Jupyter Notebook
- Matplotlib

### Database Storage

- PostgreSQL
- pgAdmin4

### Dashboard

- JavaScript - to create a dashboard displaying the results of our analysis.
- GitHub - ReadMe and files for project

## Segment I: Sketch It Out!

- First segment list of deliverables:

    - Finalize dataset for the project
    - Making a flowchart
    - Identification of technology
    - Creating database
    - Mockup of machine learning
 
### Exploratory Data Analysis (EDA)

#### Entity Relationship Diagram (ERD)

![ERD]
    
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
    - Index of institutional trust.

## Segment II: Build the Pieces

Here is a list of deliverables for Sunday, May 22, 2022:

 - Presentations are drafted in Google Slides.
 - All code in the main branch is production ready.
 - A fully integrated database is presented.
 - Description of the data preprocessing and train-test split.
 - Re-evaluation of the machine learning models.
 - Outlining and beginning the work on a dashboard for the final project.
 
### Machine Learning

The main objective of the machine learning analysis is to **predict if a country is happy or not** (Happiness score > 5.5 vs < 5.5) based on selected features and choice of models.

#### Preprocessing

- Columns were renamed to have more meaningful titles and columns containing geographic coordinates were removed as these are not potential predictors for ML.
- Number of missing values by column was calculated. Since there were only a few records with missing values, those were removed instead of being imputed.

#### Feature selection

- A **correlation matrix** was calculated and visualized for all previously selected features. This was done to examine their relationship with the target variable as well as other features (**multicolinearity**).

![Corr_matrix]()


- Unsurprisingly, **most features are correlated with other features** (e.g. GDP per capita with Social support or Life expectancy). Since our objective is prediction and not analyzing relative importance of features, we can ignore the multicolinearity.
- **All available features show strong to moderate correlation with the target variable** except Generosity and Institutional Trust. However, correlation does not imply causation and even weak correlation can be statisticially significant.
- **All features were retained** for the analysis with the intention of excluding the least important ones later on if the models suffer from overfitting.

#### Train-test split

- Since the dataset is relatively small with only 145 rows, the train-test split ratio is a key decision in the analyses. Leaving too few observations in the test dataset may produce unreliable results.
- A few split ratios were explored (0.25-0.75; 0.4-0.6; 0.5-0.5) and it was observed that a **50-50 split** produces most consistent result. A test ratio any less than 0.5 sometimes produces a better fit for test data than train which can only be described as unreliable.

#### Model choice

Since the target varible is binary (IS_HAPPY 0-1), obvious choices for models are **Logistic Regression, Random Forest (RF), and Support Vector Machine (SVM)**. Neural network could also work in theory but the small size of the data would not be conducive.

Below are the rationale, limitation and benefits for these choices of models:

##### Logistic Regression

Logistic Regression is a an obvious, time-tested method for categorical target variable. The model seprates outcome '0' from outcome '1' by calculating a probability.

**Limitation:**
- Less accurate if features-target relationship is non-linear.
- Outliers in data may affect accuracy.

**Benefit:**
- Model is explainable. Relative importance of features can be explained.
- More suitable for structured data without outliers. This could be our case as all data used are official statistics.

##### Random Forest

Random Forest models predict outcome based on a series of conditions on the features. It's a collection of Decision Trees.

**Limitation:**
- Processing time can be long for big and complex data (not our case).

**Benefit:**
- Risk of overfitting is low.
- Relative importance of features can be determined.

##### Support Vector Machine (SVM)

SVMs separates the target varible levels by calculating a hyperplane.

**Limitation:**
- If data is structured without outliers, SVM may be less accurate than Logistic.

**Benefit:**
- SVM may produce more accurate result if features-target relationship is non-linear.
- SVM performs well for data with outliers. 
- SVM is suitable for messy, unstructured data (not our case).

#### Results

- Logistic Regression

![Accuracy_Logistic]()

- Random Forest

![Accuracy_RF]()

An *n_estimator* of 5 returns the best accuracy.

- SVM

![Accuracy_SVM]()

Kernel *Poly* performs better than *Linear*.

- As can be seen, the best prediction was produced by **Random Forest Model**.


## Acknowledgement

- [World Happinessdata](https://worldhappiness.report/ed/2021/)
    - Citation:Helliwell, John F., Richard Layard, Jeffrey Sachs and Jan-Emmanuel De Neve, eds. 2020. World Happiness Report 2020. New York: Sustainable Development Solutions Network
- [Unemployment_Data_2021](https://data.worldbank.org/indicator/sl.uem.totl.zs?end=2021&start=2000&view=map)

    - International Labour Organization, ILOSTAT database

