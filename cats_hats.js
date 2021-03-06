// <!-- +Frist Problem:
// +# You have 100 cats (You are quite lucky to own so many cats!).
// +
// +# You have arranged all your cats in a line. Initially, none of your cats 
// +# have any hats. You take 100 rounds walking around the cats, always starting 
// +# at the beginning. Every time you stop at a cat, you put a hat on it if it 
// +# doesn't have one, and you take its hat off if it has one on.
// +
// +# The first round, you stop at every cat. The second round, you only stop at 
// +# every 2nd cat (#2, #4, #6, #8, etc.). The third round, you only stop at 
// +# every 3rd cat (#3, #6, #9, #12, etc.). You continue this process until the 
// +# 100th round (i.e. you only visit the 100th cat).
// +
// +# Write a program that prints which cats have hats at the end.
// +
// +
// +Seconde Problem:
// +# Write a method that takes an array of stock prices (prices on days
// +# 0, 1, ...), and outputs the most profitable pair of days on which to
// +# first buy the stock and then sell the stock, e.g.: stock_picker( [ 44,
// +# 30, 24, 32, 35, 30, 40, 38 ] ) == [ 2, 6 ] -->

//**********First Problem****************
	var count = 1;
	var cats = [];
	var result = [];
	for(var i=0; i<100; i++)
	{
		cats[i].push(false);
	}

	for(var i=0; i<100; i+=count)
	{

		for(var j=0; j<100; j++)
		{
			if(cats[j] === true)
			{
				hat = false;
			}
			else
			{
				hat = true;
			}
		}
		count +=1;
	}
	for(var i=0; i<100; i++)
	{
		if(cats[i] === true)
		{
			result.push(i);
		}
	}
	return result;

// *****************Second***************

	function findPro(arr)
	{
		var result = 0;
		var pair1 = 0;
		var pair2 = 0;
		for(var i=0; i<arr.length-1; i++)
		{
			for(var j= i+1; j<arr.length; j++)
			{
				var temp = arr[j] - arr[i];

				if(temp > result)
				{
					result = temp;
					pair1 = i;
					pair2 = j;
				}
			}
		}
		return [pair1, pair2];
	}

	console.log(findPro( [ 44, 30, 24, 32, 35, 30, 40, 38 ] ));

