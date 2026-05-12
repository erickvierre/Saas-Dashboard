
"use client";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button
} from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", users: 40 },
  { name: "Tue", users: 55 },
  { name: "Wed", users: 70 },
  { name: "Thu", users: 90 },
  { name: "Fri", users: 120 }
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        padding: "30px"
      }}
    >
      <Typography variant="h4" gutterBottom>
        SaaS Analytics Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Total Users
              </Typography>

              <Typography variant="h3">
                12,430
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Revenue
              </Typography>

              <Typography variant="h3">
                $8,540
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Active Users
              </Typography>

              <Typography variant="h3">
                1,240
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card style={{ marginTop: "30px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Weekly Users
          </Typography>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginTop: "30px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap"
            }}
          >
            <Button variant="contained">
              Add User
            </Button>

            <Button variant="outlined">
              Generate Report
            </Button>

            <Button variant="contained">
              Export Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
