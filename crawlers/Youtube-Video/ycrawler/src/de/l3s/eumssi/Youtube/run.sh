#Check __main__ at the python crawler for the usage
pip install -r requirements.txt 
COUNTER=0
while [  $COUNTER -lt 100000 ]; do
    echo The counter is $COUNTER
    let COUNTER=COUNTER+1
    for keyword in biofuels biomass bioenergy coal energy energy-monitoring hydraulic-fracturing \
	fossil-fuels gas oil shale-gas shale-oil nuclear-waste solar-power nuclear-power wind-power hydrogen-power \
	renewable-energy fracking
    do
		echo "search "  $keyword
	python Pycrawler.py --q $keyword --r date
    done
    sleep 10h
done

     
	
