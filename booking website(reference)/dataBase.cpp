#include <iostream>
#include <vector>

#include "dataBase.h"

using std::string;
using std::vector;

dataBase::dataBase():requestArray(vector<request*>()){}

void dataBase::addRequest(string date, string time, string type, string amount, string name, string email, string phone){
    request* temp1  = new request(date, time, type, amount, name, email, phone);
    requestArray.push_back(temp1);
}
dataBase::~dataBase(){
    for(int i = 0; i < requestArray.size(); i++){
        delete requestArray[i];
    }
}
vector<request*>dataBase::getRequests(){
    return requestArray;
}
