DROP TABLE IF EXISTS donuts;
DROP TABLE IF EXISTS property;



CREATE TABLE property (
    id SERIAL PRIMARY KEY,
    name text,
    address text,
    coords INTEGER
);


INSERT INTO property(name, address, coords) VALUES 
('Grape Escape', 'Grape Jam', 10),
('Cocomotive', 'Chocolate', 19),
('Health Nut', 'Almonds', 15),
('Nuttellingya', 'Nutella', 9),
('Lemongracias', 'Lemon Custard', 3),
('Maybe its Mapleline', 'Maple', 45),
('Clint Yeastwood', 'none', 15),
('Colonel Custard', 'Custard', 26),
('Pecan Sam', 'Pecans', 1);
