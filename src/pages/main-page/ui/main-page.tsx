import React from "react";
import { Card, CardContent } from "@/shared/ui/card";
// import {
//   PieChart as PieChartComponent,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

export const MainPage = () => {
  return (
    <main className="flex-1 p-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl text-muted-foreground">
            Hi, I'm a passionate developer who loves to write about technology,
            lifestyle, and travel. This blog is my platform to share my thoughts
            and experiences with the world.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="aspect-video bg-muted">
            {/* Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Image Placeholder
            </div>
          </div>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl font-semibold mb-4">My Interests</h2>
                <p className="text-muted-foreground">
                  I'm passionate about various topics in technology, lifestyle,
                  and travel. This chart represents the distribution of content
                  you'll find on my blog.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                {/* <ResponsiveContainer width="100%" height={200}>
                <PieChartComponent>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChartComponent>
              </ResponsiveContainer> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
