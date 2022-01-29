#include <iostream>
#include <vector>

#include "times.h"
using std::cout;
using std::endl;

times::times(){
    timeArray = {};
}
times::~times(){
    for(int i = 0; i < timeArray.size();i++){
        timeArray.erase(timeArray.begin());
    }
}

void times::addTime(string time){
    timeArray.push_back(time);
}

void times::removeTime(string time){
    for(int i = 0; i < timeArray.size(); i++){
        if(timeArray[i] == time){
            timeArray.erase(timeArray.begin()+i);
        }
    }
}

vector<string> times::getTimes(){
    return timeArray;
}

void times::displayTimes(){
    for(int i = 0; i < timeArray.size(); i++){
        cout << i+1 << ". " << timeArray[i] << endl;
    }
}
