# Predicting Happiness

## Overview

What makes citizens of a country happy? The World Happiness Report publishes **Hapiness Score** annually which measures average level of happiness by countries. What factors may influence this score? Is income and economic progress enough to make countries happy? Or do social factors play an important role as well?

### Key questions

- What factors determine **Happines** of a country measured as an average over its population?
- What is the relative importance of economic factors vis-a-vis social factors in this regard?
- Does inequality affect happiness?

#### Google Slides/ Visual Dashboaard Links
- Slides: presentation of the analysis can be found [here](https://docs.google.com/presentation/d/1BPEkMbP5Jsawr3WNu7WC1gh0nd24HH7HwgoW9q4v_ow/edit?usp=sharing)
- Dashboard: [World-Happiness-Report 2021](https://world-happiness-2021-report.netlify.app/)

## Datasets

- [World Happiness Report_2021](https://worldhappiness.report/ed/2021/#appendices-and-data)

The World Happiness Report is a publication of the Sustainable Development Solutions Network (SDSN). The dataset has a collection of indicators on 149 countries around the world including happiness score on a scale of 0 to 10, its standard error and more.

- [Mortality Data](https://worldhappiness.report/ed/2021/#appendices-and-data)

This is a supplementary dataset in The World Happiness Report which, among other indicators, includes the Index of institutional trust and Gini coefficient of income. These two indicators were included in the analysis.

- [Unemployment rate 2021](https://data.worldbank.org/indicator/sl.uem.totl.zs)

This dataset from the World Bank contains unemployment rate for 266 countries and areas for 2021. 

- [Country coordinates](https://www.kaggle.com/datasets/vinitasilaparasetty/country-coordinates-world)

A kaggle dataset containing coordinates of countries which was used for map visualization of the data.


## Resources

### Data Cleaning and Analysis

- Python
- Jupyter Notebook
- Matplotlib

### Database Storage

- PostgreSQL/pgAdmin4

### Machine Learning

SciKitLearn - supervised machine learning models

### Dashboard

- Tableau
- JavaScript/HTML/CSS/Plotly/Leaflet

## FlowChart

<p align="center">
    <img src="https://github.com/yaparnehir/Final_Project/blob/62e8faf94e11c4c89158f7a7c343b713442d8ebd/Images/Final_Project%20Flowchart.png"> 
</p>  
<br>  

## Database

### Preprocessing
    
Below preprocessing operations were done on the original data before storing them into a database:
- Uneccesary columns were dropped;
- A dictionary for some country names was defined and applied to accurately merge data from different sources (since Country names may not be standardized across all sources, e.g. Swaziland vs Eswatini);
- Summary statistics was produced to understand the nature of the data;
- An "IS_HAPPY" column was created by mapping to '0' if hapiness score < 5.5 and '1' if score >= 5.5;
- Potentially important external feature were merged (e.g. Unemployment rate);
    
### Storing

Below **Entity Relationship Diagram (ERD)** presents how tables were created and stored in the database:

![ERD](https://github.com/yaparnehir/Final_Project/blob/Nusrat_ML/Images/Dataset%20diagram.PNG)

SQLAlchemy was used to load the data to SQL. Following tables were created:
1. World Happiness 2021
2. Country Coordinates 
3. Gini index 2021
4. Unemployment 2021

In the next step, the tables were loaded into pgAdmin and below merge/join were performed:
- Gini index, index of institutional trust and unemployment rate were joined with happiness data using 'Country' as the key to create happiness_clean dataset.
- Similarly, country coordinates data was merged with happiness data using 'Country' as the key to create happy_coordinates table.

    
## Machine Learning

The main objective of the machine learning analysis is to **predict if a country is happy or not** (Happiness score >= 5.5 vs < 5.5) based on selected features and choice of models.

### Preliminary set of features
    
Some of the features come with the dataset. These are indicators which the publishers believe to be the determinants of happiness, namely:
- GDP per capita (log);
- Social suppport;
- Healthy life expectancy;
- Freedom to make life choices;
- Generosity;
- Perception of corruption.

There are other factors which may influence happiness and these were explored. Some examples are:
- Income inequality (Gini index);
- Unemployment rate;
- Index of institutional trust.


### Exploratory Data Analysis (EDA)

#### Data wrangling for machine learning

To prepare the data for further analysis, it was transformed as below: 
- Columns were renamed to be brief and meaningful;
- Columns containing geographic coordinates were removed as these are not potential predictors for ML.
- Data types were checked;
- Number of null values by coulmns were checked. Since there were only a few records with missing values, those were removed instead of being imputed;
- Summary statistics was produced to understand the nature of the data;

#### Feature selection

- A **correlation matrix** was calculated and visualized for all previously selected features. This was done to examine their relationship with the target variable as well as other features (**multicolinearity**).

![Corr_matrix](https://github.com/yaparnehir/Final_Project/blob/Nusrat_ML/Images/Corr_matrix.png)

- Unsurprisingly, **most features are correlated with other features** (e.g. GDP per capita with Social support or Life expectancy). Since our objective is prediction and not analyzing relative importance of features, we can ignore the multicolinearity.
- **All available features show strong to moderate correlation with the target variable** except Generosity and Institutional Trust. However, correlation does not imply causation and even weak correlation can be statisticially significant.
- Below charts show the relationship between **Happiness** and **Social support, Logged GDP per capita and Healthy life expectancy**.

**Happiness vs Social support**

![happiness_vs_s.support](https://github.com/yaparnehir/Final_Project/blob/main/Images/happiness_vs_s.support.png)

**Happiness vs Logged GDP per capita**

![happiness_vs_GDP](https://github.com/yaparnehir/Final_Project/blob/main/Images/happiness_vs_GDP.png)

**Happiness vs Healthy life expectancy**

![happiness_vs_life_expectancy](https://github.com/yaparnehir/Final_Project/blob/main/Images/happiness_vs_life_expectancy.png)

- **All features were retained** for the analysis with the intention of excluding the least important ones later on if the models suffer from overfitting.

### Train-test split

- Since the dataset is relatively small with only 145 rows, the train-test split ratio is a key decision in the analyses. Leaving too few observations in the test dataset may produce unreliable results.
- A few split ratios were explored (0.25-0.75; 0.4-0.6; 0.5-0.5) and it was observed that a **50-50 split** produces most consistent result. A test ratio any less than 0.5 sometimes produces a better fit for test data than train which can only be described as unreliable.

### Model choice rationale

Since the target varible is binary (IS_HAPPY 0-1), obvious choices for models are **Logistic Regression, Random Forest (RF), and Support Vector Machine (SVM)**. Neural network could also work in theory but the small size of the data would not be conducive.

Below are the rationale, limitation and benefits for these choices of models:

#### Logistic Regression

Logistic Regression is a an obvious, time-tested method for categorical target variable. The model seprates outcome '0' from outcome '1' by calculating a probability.

**Limitation:**
- Less accurate if features-target relationship is non-linear.
- Outliers in data may affect accuracy.

**Benefit:**
- Model is explainable. Relative importance of features can be explained.
- More suitable for structured data without outliers. This could be our case as all data used are official statistics.

#### Random Forest

Random Forest models predict outcome based on a series of conditions on the features. It's a collection of Decision Trees.

**Limitation:**
- Processing time can be long for big and complex data (not our case).

**Benefit:**
- Risk of overfitting is low.
- Relative importance of features can be determined.

#### Support Vector Machine (SVM)

SVMs separates the target varible levels by calculating a hyperplane.

**Limitation:**
- If data is structured without outliers, SVM may be less accurate than Logistic.

**Benefit:**
- SVM may produce more accurate result if features-target relationship is non-linear.
- SVM performs well for data with outliers. 
- SVM is suitable for messy, unstructured data (not our case).

### Results

- **Logistic Regression**

![Accuracy_Logistic](https://github.com/yaparnehir/Final_Project/blob/Nusrat_ML/Images/Accuracy_Logistic.png)

- **Random Forest**

![Accuracy_RF](https://github.com/yaparnehir/Final_Project/blob/Nusrat_ML/Images/Accuracy_RF.png)

An *n_estimator* of 5 returns the best accuracy.

- As can be seen, the best prediction was produced by **Random Forest Model**. Below are the relative importance of the predictors in the Random Forest Model:

![relative-importance](https://github.com/yaparnehir/Final_Project/blob/main/Images/Feature_importance.png)

- **Support Vector Machine (SVM)**

![Accuracy_SVM](https://github.com/yaparnehir/Final_Project/blob/Nusrat_ML/Images/Accuracy_SVM.png)

Kernel *Poly* performs better than *Linear*.

#### Key findings

- Most important factors in making citizens of a country happy are **adequate social support and high income**.
- However, **none of these factors alone is sufficient** in making people happy. There are unhappy countries with high income but lack of freedom and vice versa. What's important is that all of these factors are at a satisfactory level.

### Recommendation

The fact that the presence of relatively less influential features such as Gini index does not result in overfitting tells us that there's room for further improvement in model fit. More external indicators can be explored as features (e.g. Social trust) to see if they can improve accuracy of prediction.

### Dashboard

Tableau and JavaScript were used to create an interactive dashboard to present the findings of the analysis.


## Acknowledgement

- [World Happinessdata](https://worldhappiness.report/ed/2021/)
    - Citation:Helliwell, John F., Richard Layard, Jeffrey Sachs and Jan-Emmanuel De Neve, eds. 2020. World Happiness Report 2020. New York: Sustainable Development Solutions Network
- [Unemployment_Data_2021](https://data.worldbank.org/indicator/sl.uem.totl.zs?end=2021&start=2000&view=map)

    - International Labour Organization, ILOSTAT database
