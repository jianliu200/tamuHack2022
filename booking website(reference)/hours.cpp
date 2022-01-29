#include "hours.h"
#include <iostream>
#include <vector>

using std::string;
using std::vector;
using std::endl;
using std::cout;

hours::hours(){
    myHours = {};
}

hours::~hours(){
    for(int i = 0; i < myHours.size(); i++){
        myHours.erase(myHours.begin());
    }
}

void hours::addHours(string time){
    myHours.push_back(time);
}

void hours::removeHours(string time){
    for(int i = 0; i < myHours.size(); i++){
        if(myHours[i] == time){
            myHours.erase(myHours.begin()+i);
        }
    }
}

vector<string> hours::getHours(){
    return myHours;
}

void hours::displayHours(){
    for(int i = 0; i < myHours.size();i ++){
        cout << i+1 << ". " << myHours[i] << endl;
    }
}