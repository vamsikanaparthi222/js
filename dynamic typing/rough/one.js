/*var 
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        if (arr[i][j] == 1 & !visited[i][j])
        {
            visited[i][j] = true;
            int current_maximum = count_ones(arr, n, i, j, visited);
            if (current_maximum > maximum)
            {
                maximum = current_maximum;
            }
            // for (int p = 0; p < n; p++)
            // {
            //     for (int q = 0; q < n; q++)
            //     {
            //         visited[p][q] = false;
            //     }
            // }
        }
    }
}
return maximum;*/


/*var i = 0, t = 0;

process.stdin.on('data', function (n) {
    if (t == 0) {
       t = n;
    } else {
         if (i++ < t) {
             process.stdout.write(Factorial(n).toString());
             if (i == t) {
                 process.exit();
             }
         } else {
             process.exit();
         }
    }
});

function Factorial (n) {
    if (n > 1) {
        n *= Factorial(n - 1);
    }
    return n;
}*/
<script>

	// Javascript program to implement
	// the above approach
	
	// For a given array []arr,
	// calculates the maximum j – i
	// such that arr[j] > arr[i]
	
	let v = [34, 8, 10, 3, 2, 80, 30, 33, 1];
	let n = v.length;
	let maxFromEnd = new Array(n + 1);

	for (let i = 0; i < maxFromEnd.length; i++)
	maxFromEnd[i] = Number.MIN_VALUE;

	// Create an array maxfromEnd
	for (let i = v.length - 1; i >= 0; i--)
	{
	maxFromEnd[i] = Math.max(maxFromEnd[i + 1], v[i]);
	}

	let result = 0;

	for (let i = 0; i < v.length; i++)
	{
	let low = i + 1, high = v.length - 1, ans = i;

	while (low <= high)
	{
		let mid = parseInt((low + high) / 2, 10);

		if (v[i] <= maxFromEnd[mid])
		{
		// We store this as current
		// answer and look for further
		// larger number to the right side
		ans = Math.max(ans, mid);
		low = mid + 1;
		}
		else
		{
		high = mid - 1;
		}
	}

	// Keeping a track of the
	// maximum difference in indices
	result = Math.max(result, ans - i);
	}
	document.write(result);

</script>
