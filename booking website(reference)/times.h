#ifndef TIMES_H
#define TIMES_H

#include "hours.h"

#include <iostream>
#include <vector>

using std::string;
using std::vector;

class times{
    private:
        vector<string> timeArray;
        hours days_hours;
    public:
        times();
        ~times();
        void addTime(string time);
        void removeTime(string time);
        vector<string> getTimes();
        void displayTimes();
};

#endif