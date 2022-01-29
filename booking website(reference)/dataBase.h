#ifndef _DATEBASE_H
#define _DATEBASE_H

#include "request.h"
#include <iostream>
#include <vector>

class dataBase{
    private:
        vector<request*> requestArray;
    public:
        dataBase();
        ~dataBase();
        vector<request*> getRequests();
        void addRequest(string date, string time, string type, string amount, string name, string email, string phone);
};

#endif