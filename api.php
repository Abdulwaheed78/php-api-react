<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $result = $conn->query("SELECT * FROM users WHERE id = $id");
            if (mysqli_num_rows($result) > 0) {
                echo json_encode(['status' => true, 'message' => 'record Found', 'data' => $result->fetch_assoc()]);
            } else {
                echo json_encode(['status' => false, 'message' => 'No Record Found with this id: ' . $id]);
            }
        } else {
            $result = $conn->query("SELECT * FROM users ORDER BY id DESC");
            if (mysqli_num_rows($result) > 0) {
                $users = [];
                while ($row = $result->fetch_assoc()) {
                    $users[] = $row;
                }

                echo json_encode(['status' => true, 'message' => 'record Found', 'data' => $users]);
            } else {
                echo json_encode(['status' => false, 'message' => 'No Records Found']);
            }
        }
        break;

    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['name'], $data['email'], $data['password'], $data['dob'])) {
            echo json_encode(["status" => false, "message" => "All feilds are required"]);
            exit;
        }

        $name = $conn->real_escape_string($data['name']);
        $email = $conn->real_escape_string($data['email']);
        $password = password_hash($data['password'], PASSWORD_DEFAULT);
        $dob = $conn->real_escape_string($data['dob']);

        $query = "INSERT INTO users (name, email, password, dob) VALUES ('$name', '$email', '$password', '$dob')";
        if ($conn->query($query)) {
            echo json_encode(["status" => true, "message" => "User created"]);
        } else {
            echo json_encode(["status" => false, "message" => $conn->error]);
        }
        break;

    case "PUT":
        $data = json_decode(file_get_contents("php://input"), true);
        $id = intval($_GET['id']);

        $name = $conn->real_escape_string($data['name']);
        $email = $conn->real_escape_string($data['email']);
        $password = password_hash($data['password'], PASSWORD_DEFAULT);
        $dob = $conn->real_escape_string($data['dob']);

        $query = "UPDATE users SET name='$name', email='$email', password='$password', dob='$dob' WHERE id=$id";
        if ($conn->query($query)) {
            echo json_encode(["status" => true, "message" => "User updated"]);
        } else {
            echo json_encode(["status" => false, "message" => $conn->error]);
        }
        break;

    case "DELETE":
        $id = intval($_GET['id']);
        $query = "DELETE FROM users WHERE id = $id";
        if ($conn->query($query)) {
            echo json_encode(["status" => true, "message" => "User deleted"]);
        } else {
            echo json_encode(["status" => false, "message" => $conn->error]);
        }
        break;

    default:
        echo json_encode(["status" => false, "message" => "Invalid request method"]);
        break;
}

$conn->close();
