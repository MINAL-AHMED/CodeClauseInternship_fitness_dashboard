import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";

export function DashboardComponent() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="grid gap-4 p-4 md:gap-8 md:p-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Today's Stats</CardTitle>
            <Button className="rounded-full" size="icon" variant="ghost">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">View more</span>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-6">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
              <div className="flex items-center gap-2">
                <ActivityIcon className="w-6 h-6" />
                <div className="grid gap-1.5">
                  <p className="text-sm font-medium">Steps</p>
                  <p className="text-2xl font-semibold tracking-tighter">
                    4,231
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FlameIcon className="w-6 h-6" />
                <div className="grid gap-1.5">
                  <p className="text-sm font-medium">Calories</p>
                  <p className="text-2xl font-semibold tracking-tighter">320</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-2">
              <div className="flex items-center gap-2">
                <TimerIcon className="w-6 h-6" />
                <div className="grid gap-1.5">
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-2xl font-semibold tracking-tighter">
                    1h 23m
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <HeartIcon className="w-6 h-6" />
                <div className="grid gap-1.5">
                  <p className="text-sm font-medium">Heart Rate</p>
                  <p className="text-2xl font-semibold tracking-tighter">
                    98 bpm
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Weekly Progress
            </CardTitle>
            <Button className="rounded-full" size="icon" variant="ghost">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">View more</span>
            </Button>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <CurvedlineChart className="w-[300px] aspect-[1/1]" />
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Mon</span>
                  <span className="ml-auto">+230</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Tue</span>
                  <span className="ml-auto">+210</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Wed</span>
                  <span className="ml-auto">+190</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Thu</span>
                  <span className="ml-auto">+250</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Fri</span>
                  <span className="ml-auto">+270</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Sat</span>
                  <span className="ml-auto">+320</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Sun</span>
                  <span className="ml-auto">+280</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <div className="flex flex-col text-right">
                <p className="text-sm">Steps</p>
                <p className="text-sm">Calories</p>
                <p className="text-sm">Duration</p>
                <p className="text-sm">Heart Rate</p>
              </div>
              <div className="flex flex-col gap-1.5 md:ml-auto md:gap-1.5">
                <p className="text-sm font-semibold">+230</p>
                <p className="text-sm font-semibold">+210</p>
                <p className="text-sm font-semibold">+190</p>
                <p className="text-sm font-semibold">+250</p>
                <p className="text-sm font-semibold">+270</p>
                <p className="text-sm font-semibold">+320</p>
                <p className="text-sm font-semibold">+280</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Activity Log</CardTitle>
            <Button className="rounded-full" size="icon" variant="ghost">
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Card>
              <CardContent className="p-0">
                <div className="flex items-center gap-4 p-4">
                  <NavigationIcon className="w-8 h-8" />
                  <div className="grid gap-1.5">
                    <p className="text-sm font-medium">Walking</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      10:00am - 11:00am
                    </p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-sm font-semibold">+1200 steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="flex items-center gap-4 p-4">
                  <ActivityIcon className="w-8 h-8" />
                  <div className="grid gap-1.5">
                    <p className="text-sm font-medium">Running</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      5:00pm - 6:00pm
                    </p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-sm font-semibold">+2500 steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="flex items-center gap-4 p-4">
                  <BikeIcon className="w-8 h-8" />
                  <div className="grid gap-1.5">
                    <p className="text-sm font-medium">Biking</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      3:00pm - 4:00pm
                    </p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-sm font-semibold">+1800 steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Goals</CardTitle>
            <Button className="rounded-full" size="icon" variant="ghost">
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Card>
              <CardContent className="flex items-center p-4">
                <CheckIcon className="w-4 h-4" />
                <p className="ml-2">Walk 10,000 steps</p>
                <span className="ml-auto">50%</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <CheckIcon className="w-4 h-4" />
                <p className="ml-2">Burn 500 calories</p>
                <span className="ml-auto">25%</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <CheckIcon className="w-4 h-4" />
                <p className="ml-2">Exercise for 30 minutes</p>
                <span className="ml-auto">100%</span>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function NavigationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function BikeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
