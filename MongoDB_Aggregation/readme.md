# MongoDB AGGREGATION PIPELINE

## Question-1: How many users are active ?

###

    {
        $match:{
            isActive:true
        }
    },
    {
        $count: 'activeUsers'
    }

## Question-2 What is the average age of all users ?

###

    {
        $group:{
            _id:null,
            averageAge:{
                $avg:'$age'
            }
        }
    }

## Question-3 List the top 5 most common favourite fruits among users

###

    {
    $group:{
        _id:'$favouriteFruit',
        count:{
            $sum:1
            }
        }
    },
    {
    $sort:{
        'count':-1
    }
    },
    {
        $limit:3
    }

## Question-4 Find the total number of males and females

### Use group operator and then sum the value up


## Question-5 Which country has the highest number of registered users?

###