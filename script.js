function loaded()
{
	date1Set();
    date2Set();
    diffSet();
    checkConsistency();
    liveSeconds1();
    liveSeconds2();
    my_interval1 = setInterval(liveSeconds1, 1000);
    my_interval2 = setInterval(liveSeconds2, 1000);
}

function liveSeconds1()
{
    my_date = Date.parse(document.getElementById("my_date1").innerHTML);
	if (isNaN(my_date))
	{
		return;
	}
	num_sec = Math.floor((Date.now() - my_date) / 1000);
    if (num_sec < 0)
    {
    	document.getElementById("pre1").innerHTML = "will be in";
        document.getElementById("live_seconds1").value = -num_sec;
        document.getElementById("post1").innerHTML = "seconds from now.";
    }
    else
    {
    	document.getElementById("pre1").innerHTML = "was";
        document.getElementById("live_seconds1").value = num_sec;
        document.getElementById("post1").innerHTML = "seconds ago.";
    }
}

function liveSeconds2()
{
    my_date = Date.parse(document.getElementById("my_date2").innerHTML);
	if (isNaN(my_date))
	{
		return;
	}
	num_sec = Math.floor((Date.now() - my_date) / 1000);
    if (num_sec < 0)
    {
    	document.getElementById("pre2").innerHTML = "will be in";
        document.getElementById("live_seconds2").value = -num_sec;
        document.getElementById("post2").innerHTML = "seconds from now.";
    }
    else
    {
    	document.getElementById("pre2").innerHTML = "was";
        document.getElementById("live_seconds2").value = num_sec;
        document.getElementById("post2").innerHTML = "seconds ago.";
    }
}

function diffSet()
{
	document.getElementById("diff_seconds").innerHTML = parseInt(document.getElementById("diff_input").value);
}

function date1Set()
{
	my_date_raw = document.getElementById("date1_input").value;
    if (my_date_raw.toString() == "")
    {
    	//clearInterval(my_interval1);
        document.getElementById("my_date1").innerHTML = "enter date";
        document.getElementById("live_seconds1").value = "--";
		return;
    }
    my_date = Date.parse(my_date_raw);
	showdate = new Date(my_date);
    document.getElementById("my_date1").innerHTML = showdate.toString();
}

function date2Set()
{
	my_date_raw = document.getElementById("date2_input").value;
    if (my_date_raw.toString() == "")
    {
    	//clearInterval(my_interval2);
        document.getElementById("my_date2").innerHTML = "enter date";
        document.getElementById("live_seconds2").value = "--";
		return;
    }
    my_date = Date.parse(my_date_raw);
	showdate = new Date(my_date);
    document.getElementById("my_date2").innerHTML = showdate.toString();
}

function diffChange()
{
	diffSet();
    checkConsistency();
}

function date1Change()
{
	date1Set();
    checkConsistency();
}

function date2Change()
{
	date2Set();
    checkConsistency();
}

function checkConsistency()
{
	d1 = Date.parse(document.getElementById("my_date1").innerHTML);
    diff = parseInt(document.getElementById("diff_seconds").innerHTML)*1000;
    d2 = Date.parse(document.getElementById("my_date2").innerHTML);
	if ( d1 + diff == d2 )
    {
    	document.getElementById("consistent").innerHTML = "=";
        document.getElementById("btnd1").setAttribute("disabled","disabled");
        document.getElementById("btndiff").setAttribute("disabled","disabled");
        document.getElementById("btnd2").setAttribute("disabled","disabled");
		document.querySelector(":root").style.setProperty("--eqbg","#eeffee");
    }
    else
    {
    	document.getElementById("consistent").innerHTML = "&#10060;";
        document.getElementById("btnd1").removeAttribute("disabled");
        document.getElementById("btndiff").removeAttribute("disabled");
        document.getElementById("btnd2").removeAttribute("disabled");
		document.querySelector(":root").style.setProperty("--eqbg","#ffeeee");
    }
}

function diffCalc()
{
	d1 = Date.parse(document.getElementById("my_date1").innerHTML);
    d2 = Date.parse(document.getElementById("my_date2").innerHTML);
    diff = (d2 - d1) / 1000;
    document.getElementById("diff_seconds").innerHTML = diff;
    checkConsistency();
}

function date1Calc()
{
    diff = parseInt(document.getElementById("diff_seconds").innerHTML)*1000;
    d2 = Date.parse(document.getElementById("my_date2").innerHTML);
    d1 = new Date( d2 - diff );
    document.getElementById("my_date1").innerHTML = d1.toString();
    checkConsistency();
}

function date2Calc()
{
	d1 = Date.parse(document.getElementById("my_date1").innerHTML);
    diff = parseInt(document.getElementById("diff_seconds").innerHTML)*1000;
    d2 = new Date( d1 + diff );
    document.getElementById("my_date2").innerHTML = d2.toString();
    checkConsistency();
}


