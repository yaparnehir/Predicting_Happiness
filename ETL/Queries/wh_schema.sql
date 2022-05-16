--View all original cleaned data

-- View World_happiness 2021
	-- Drop Table if error occurrs(uncomment code below)
	-- DROP TABLE happiness_clean;
SELECT * FROM happiness_clean;


--View Country Coordinates
	-- Drop Table if error occurrs(uncomment code below)
	-- DROP TABLE country_coordinates;
Select * FROM country_coordinates;

-- View Gini Index
	-- Drop Table if error occurrs(uncomment code below)
	-- DROP TABLE gini_index;
Select * FROM gini_index;

-- View Unemployment
	-- Drop Table if error occurrs(uncomment code below)
	-- DROP TABLE unemployment;
Select * FROM unemployment;



-- Merge data on "Country" into new table happy_complete

	-- Drop Table if error occurrs(uncomment code below)
	-- DROP TABLE happy_complete;

SELECT hc.*, g."Index of institutional trust", g."Gini coefficient of income",
unemp."2021", cc."latitude", cc."longitude"
INTO happy_complete
from happiness_clean as hc
LEFT JOIN gini_index as g on (g."Country" = hc."Country")
LEFT JOIN unemployment as unemp on (unemp."Country" = hc."Country")
LEFT JOIN country_coordinates as cc on (cc."Country" = hc."Country");

Select * From happy_complete;


-- Create Country Coordinates with Happiness scores
SELECT cc.*, hc."Happiness score"
INTO happy_coord
from country_coordinates as cc
LEFT JOIN happiness_clean as hc on (hc."Country" = cc."Country");

Select * From happy_coord;
