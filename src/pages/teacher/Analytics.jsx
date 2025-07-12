import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const Analytics = () => {
  const stats = [
    { metric: "Total Courses", value: 3 },
    { metric: "Total Students", value: 295 },
    { metric: "Avg Completion Rate", value: "84%" },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          📊 Platform Analytics
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Metric</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.metric}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Analytics;
